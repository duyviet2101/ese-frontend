import TextField from '@mui/material/TextField';
import {
  Chip,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Select,
  SvgIcon,
  Typography,
  useTheme
} from '@mui/material';
import { BiSearchAlt } from 'react-icons/bi';
import Autocomplete from '@mui/material/Autocomplete';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import * as React from 'react';

export function SearchNameBox() {
  return (
    <Autocomplete
      freeSolo
      size={"small"}
      disableClearable
      options={top100Films.map((option) => option.title)}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Tìm kiếm tên"
          InputProps={{
            ...params.InputProps,
            type: 'search',
            placeholder: "Nhập tên luận án...",
            startAdornment: (
              <InputAdornment
                position={"start"}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                  marginRight: 0,
                  marginLeft: 1,
                }}
              >
                <SvgIcon component={BiSearchAlt}/>
              </InputAdornment>
            )
          }}
        />
      )}
      sx={{
        width: "100%"
      }}
    />
  );
}

export function SelectDate() {
  return (
    <>
      <Box
        display={"flex"}
        flexDirection={"column"}
        gap={2}
      >
        <Typography variant={"body1"}>Chọn ngày bảo vệ</Typography>
        <Box
          sx={{
            display: 'flex',
            gap: 1,
            flexWrap: "wrap"
          }}
        >
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              defaultValue={dayjs(Date.now())}
              slotProps={{
                textField: {
                  size: "small"
                }
              }}
              label="Từ ngày"
              format={"DD/MM/YYYY"}
            />
          </LocalizationProvider>
          <Divider
            flexItem={true}
            sx={{
              width: "10px",
              alignSelf: "center",
            }}
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              defaultValue={dayjs(Date.now())}
              label="Đến ngày"
              format={"DD/MM/YYYY"}
              slotProps={{
                textField: {
                  size: "small"
                }
              }}
            />
          </LocalizationProvider>
        </Box>
      </Box>
    </>
  )
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const status = [
  {
    label: "Tất cả",
    value: "",
    color: "default"
  },
  {
    label: "Chưa tìm hội đồng",
    value: "backlog",
    color: "warning"
  },
  {
    label: "Đang liên lạc",
    value: "in-progress",
    color: "info"
  },
  {
    label: "Đã có hội đồng",
    value: "done",
    color: "success"
  }
];

function getStyles(name, statusLabel, theme) {
  return {
    fontWeight:
      statusLabel.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export function SelectStatus() {
  const theme = useTheme();
  const [statusLabel, setStatusLabel] = React.useState([""]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setStatusLabel(
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
      <FormControl size={"small"} sx={{ minWidth: 200 }}>
        <InputLabel id="select-status">Trạng thái</InputLabel>
        <Select
          labelId="select-status"
          id="demo-multiple-chip"
          value={statusLabel}
          onChange={handleChange}
          input={<OutlinedInput id="select-status" label="Trạng thái" />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em>Tất cả</em>;
            }

            return (
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {selected.map((value) => {
                  const item = status.find((item) => item.value === value);
                  return (
                    <Chip size={"small"} key={value} color={item.color} label={item.label} style={{ margin: 2 }} />
                  );
                })}
              </Box>
            );
          }}
          MenuProps={MenuProps}
        >
          {status.map((item) => (
            <MenuItem
              key={item.value}
              value={item.value}
              style={getStyles(item, statusLabel, theme)}
            >
              {item.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: 'Schindler\'s List', year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
  {
    title: 'The Lord of the Rings: The Return of the King',
    year: 2003
  },
  { title: 'The Good, the Bad and the Ugly', year: 1966 },
  { title: 'Fight Club', year: 1999 },
  {
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    year: 2001
  },
  {
    title: 'Star Wars: Episode V - The Empire Strikes Back',
    year: 1980
  },
  { title: 'Forrest Gump', year: 1994 },
  { title: 'Inception', year: 2010 },
  {
    title: 'The Lord of the Rings: The Two Towers',
    year: 2002
  },
  { title: 'One Flew Over the Cuckoo\'s Nest', year: 1975 },
  { title: 'Goodfellas', year: 1990 },
  { title: 'The Matrix', year: 1999 },
  { title: 'Seven Samurai', year: 1954 },
  {
    title: 'Star Wars: Episode IV - A New Hope',
    year: 1977,
  },
  { title: 'City of God', year: 2002 },
  { title: 'Se7en', year: 1995 },
  { title: 'The Silence of the Lambs', year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: 'Life Is Beautiful', year: 1997 },
  { title: 'The Usual Suspects', year: 1995 },
  { title: 'Léon: The Professional', year: 1994 },
  { title: 'Spirited Away', year: 2001 },
  { title: 'Saving Private Ryan', year: 1998 },
  { title: 'Once Upon a Time in the West', year: 1968 },
  { title: 'American History X', year: 1998 },
  { title: 'Interstellar', year: 2014 },
];