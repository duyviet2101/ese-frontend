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
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import Request from '~/utils/request.js';
import { Controller, useForm } from 'react-hook-form';
import pushToast from '~/helpers/sonnerToast.js';
import { useSearchParams } from 'react-router-dom';

export function SearchNameBox({
  q = "",
  setQ = () => {},
  register = null
}) {
  const handleChange = (event) => {
    setQ(event.target.value);
  }

  return (
    <TextField
      size={"small"}
      label="Tìm kiếm tên"
      variant="outlined"
      placeholder="Nhập tên luận án..."
      sx={{
        width: "100%"
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SvgIcon component={BiSearchAlt}/>
          </InputAdornment>
        ),
      }}
      {...register("q", {
        value: q,
        onChange: handleChange
      })}
    />
  );
}

export function SelectDate({
  control = null,
  searchParams = null
}) {
  const fromDefDate = searchParams.get("fromDefDate") || "";
  const toDefDate = searchParams.get("toDefDate") || "";

  return (
    <>
      <Box
        display={"flex"}
        flexDirection={"column"}
        gap={2}
      >
        <Typography variant={"body1"}>Ngày bảo vệ</Typography>
        <Box
          sx={{
            display: 'flex',
            gap: 1,
            flexWrap: "wrap"
          }}
        >
          <Controller
            name={"fromDefDate"}
            control={control}
            render={({
                       field: { onChange, value },
                       fieldState: { error }
                     }) => {
              return (
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="Từ ngày"
                    value={fromDefDate ? dayjs(fromDefDate, 'DD/MM/YYYY') : null}
                    slotProps={{
                      textField: {
                        size: "small",
                        error: !!error,
                        helperText: error?.message
                      }
                    }}
                    format={"DD/MM/YYYY"}
                    onChange={(date) => onChange(dayjs(date).format('DD/MM/YYYY'))}
                  />
                </LocalizationProvider>
              )
            }}
          />
          <Divider
            flexItem={true}
            sx={{
              width: "10px",
              alignSelf: "center",
            }}
          />
          <Controller
            name={"toDefDate"}
            control={control}
            render={({
                       field: { onChange, value },
                       fieldState: { error }
                     }) => {
              return (
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="Đến ngày"
                    value={toDefDate ? dayjs(toDefDate, 'DD/MM/YYYY') : null}
                    slotProps={{
                      textField: {
                        size: "small",
                        error: !!error,
                        helperText: error?.message
                      }
                    }}
                    format={"DD/MM/YYYY"}
                    onChange={(date) => onChange(dayjs(date).format('DD/MM/YYYY'))}
                  />
                </LocalizationProvider>
              )
            }}
          />
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
    value: "not_started",
    color: "warning"
  },
  {
    label: "Đang liên lạc",
    value: "waiting",
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

export function SelectStatus({
  register = null,
  control = null,
  searchParams = null
}) {
  const theme = useTheme();
  const [statusLabel, setStatusLabel] = React.useState("");

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setStatusLabel(value);
  };

  useEffect(() => {
    setStatusLabel(searchParams.get("status") || "");
  }, [searchParams]);

  return (
    <div>
      <FormControl size={"small"} sx={{ minWidth: 200 }}>
        <InputLabel id="select-status">Trạng thái</InputLabel>
        <Select
          labelId="select-status"
          id="select-status-multiple-chip"
          value={statusLabel}
          input={<OutlinedInput
            id="select-status"
            label="Trạng thái"
            {...register("status", {
              value: statusLabel,
              onChange: handleChange
            })}
          />}
          renderValue={(selected) => {
            if (!selected) {
              return (
                <Chip size={"small"} color={'default'} label={"Tất cả"} style={{ margin: 2 }} />
              );
            }

            return (
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                <Chip size={"small"} key={selected} color={status.find(s => s.value === selected)?.color || 'default'} label={status.find(s => s.value === selected).label || selected} style={{ margin: 2 }} />
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

export default function SearchTheseToolbar({
  setRows = () => {},
  setPageInfo = () => {},
  pageSize = 5,
  paginationModel = {}
}) {
  const [q, setQ] = useState("");
  const [searchParams, setSearchParams] = useSearchParams(new URLSearchParams(location.search));

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    reValidateMode: "onChange",
    resolver: undefined,
    criteriaMode: "firstError"
  });

  const onSubmit = async (data) => {
    searchParams.set("q", data.q || '');
    searchParams.set("fromDefDate", data.fromDefDate || '');
    searchParams.set("toDefDate", data.toDefDate || '');
    searchParams.set("status", data?.status || '');
    setSearchParams(searchParams);
  }

  const onError = (errors, e) => {
    pushToast("Có lỗi xảy ra, vui lòng kiểm tra lại!", "error");
  }

  const onReset = () => {
    reset({
      q: "",
      fromDefDate: "",
      toDefDate: "",
      status: ""
    });
    setSearchParams(new URLSearchParams());
  }

  useEffect(() => {
    const fetchData = async () => {
      const res = await Request.get(`/theses?page=${paginationModel.page + 1}&pageSize=${pageSize}&${searchParams.toString()}`);
      setRows(res.items);
      setPageInfo({
        totalRowCount: res.pagination.total
      })
    }
    fetchData();
  }, [paginationModel, searchParams]);

  return (
    <Box
      component={"form"}
      onSubmit={handleSubmit(onSubmit, onError)}
      noValidate
    >
      <Box
        sx={{
          display: 'flex',
          gap: 1,
          flexBasis: "100%",
          height: "40px",
          marginBottom: 1
        }}
      >
        <SearchNameBox register={register} q={q} setQ={setQ} />
        <Button
          variant="contained"
          sx={{
            textWrap: "none",
            whiteSpace: "nowrap",
            height: "100%",
            backgroundColor: "rgb(0,128,255)",
            "&:hover": {
              backgroundColor: "rgb(0,128,255)",
            },
          }}
          type="submit"
        >
          Tìm kiếm
        </Button>
        <Button
          sx={{
            textWrap: "none",
            whiteSpace: "nowrap",
            height: "100%",
            paddingX: "15px"
          }}
          variant="outlined"
          onClick={onReset}
        >
          Xoá bộ lọc
        </Button>
      </Box>
      <Box
        sx={{
          display: 'flex',
          gap: 1,
          alignItems: 'end',
        }}
      >
        <SelectDate searchParams={searchParams} register={register} control={control} />
        <SelectStatus searchParams={searchParams} register={register} control={control} />
      </Box>
    </Box>
  )
}