import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { Chip, darken, InputAdornment, lighten, Stack, styled, SvgIcon } from '@mui/material';
import { BiSearchAlt } from 'react-icons/bi';
import Tooltip from '@mui/material/Tooltip';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;


const GroupHeader = styled('div')(({ theme }) => ({
  position: 'sticky',
  top: '-8px',
  padding: '4px 10px',
  color: theme.palette.primary.main,
  backgroundColor:
    theme.palette.mode === 'light'
      ? lighten(theme.palette.primary.light, 0.85)
      : darken(theme.palette.primary.main, 0.8),
}));

const GroupItems = styled('ul')({
  padding: 0,
});

export function SelectTopics() {
  const topics = [
    {
      title: "Học máy",
    },
    {
      title: "Trí tuệ nhân tạo",
    },
    {
      title: "Kinh tế",
    },
    {
      title: "Cơ khí",
    },
    {
      title: "Công nghệ thông tin"
    }
  ]

  const options = topics.map((option) => {
    const firstLetter = option.title[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
      ...option,
    };
  });

  return (
    <Autocomplete
      size={"small"}
      multiple
      options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
      limitTags={4}
      renderTags={(value, getTagProps) => value.map((option, index) => (
        <Tooltip title={option.title} key={index}>
          <Chip
            label={option.title}
            {...getTagProps({ index })}
            key={index}
            color={"info"}
          />
        </Tooltip>
      ))}
      disableCloseOnSelect
      groupBy={(option) => option.firstLetter}
      getOptionLabel={(option) => option.title}
      renderOption={(props, option, { selected }) => {
        const { key, ...optionProps } = props;
        return (
          <li key={key} {...optionProps}>
            <Checkbox
              icon={icon}
              checkedIcon={checkedIcon}
              style={{ marginRight: 8 }}
              checked={selected}
            />
            {option.title}
          </li>
        );
      }}
      sx={{
        width: 500,
      }}
      renderGroup={(params) => (
        <li key={params.key}>
          <GroupHeader>{params.group}</GroupHeader>
          <GroupItems>{params.children}</GroupItems>
        </li>
      )}
      renderInput={(params) => (
        <TextField {...params} label="Chủ đề" placeholder="Chủ đề" />
      )}
    />
  );
}

export function SelectDegree() {
  const degree = [
    {
      title: "PGS.TS"
    },
    {
      title: "TS"
    },
    {
      title: "ThS"
    }
  ]

  const options = degree.map((option) => {
    const firstLetter = option.title[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
      ...option,
    };
  });

  return (
    <Autocomplete
      size={"small"}
      multiple
      options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
      limitTags={4}
      renderTags={(value, getTagProps) => value.map((option, index) => (
        <Tooltip title={option.title} key={index}>
          <Chip
            label={option.title}
            {...getTagProps({ index })}
            key={index}
            color={"info"}
            // variant={"outlined"}
          />
        </Tooltip>
      ))}
      disableCloseOnSelect
      groupBy={(option) => option.firstLetter}
      getOptionLabel={(option) => option.title}
      renderOption={(props, option, { selected }) => {
        const { key, ...optionProps } = props;
        return (
          <li key={key} {...optionProps}>
            <Checkbox
              icon={icon}
              checkedIcon={checkedIcon}
              style={{ marginRight: 8 }}
              checked={selected}
            />
            {option.title}
          </li>
        );
      }}
      sx={{
        width: 150,
      }}
      renderGroup={(params) => (
        <li key={params.key}>
          <GroupHeader>{params.group}</GroupHeader>
          <GroupItems>{params.children}</GroupItems>
        </li>
      )}
      renderInput={(params) => (
        <TextField {...params} label="Học vị" placeholder="Học vị" />
      )}
    />
  );
}

export function SelectAddress() {
  const options = provinces.map((option) => {
    const firstLetter = option.state_name[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
      ...option,
    };
  });

  return (
    <Autocomplete
      size={"small"}
      multiple
      options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
      limitTags={4}
      renderTags={(value, getTagProps) => value.map((option, index) => (
        <Tooltip title={option.state_name} key={index}>
          <Chip
            label={option.state_name}
            {...getTagProps({ index })}
            key={index}
            color={"info"}
            // variant={"outlined"}
          />
        </Tooltip>
      ))}
      disableCloseOnSelect
      groupBy={(option) => option.firstLetter}
      getOptionLabel={(option) => option.state_name}
      renderOption={(props, option, { selected }) => {
        const { key, ...optionProps } = props;
        return (
          <li key={key} {...optionProps}>
            <Checkbox
              icon={icon}
              checkedIcon={checkedIcon}
              style={{ marginRight: 8 }}
              checked={selected}
            />
            {option.state_name}
          </li>
        );
      }}
      sx={{
        width: 200,
      }}
      renderGroup={(params) => (
        <li key={params.key}>
          <GroupHeader>{params.group}</GroupHeader>
          <GroupItems>{params.children}</GroupItems>
        </li>
      )}
      renderInput={(params) => (
        <TextField {...params} label="Khu vực" placeholder="Khu vực" />
      )}
    />
  );
}

export function SelectOccupation() {
  const options = universities.map((option) => {
    const firstLetter = option.name_universities[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
      ...option,
    };
  });

  return (
    <Autocomplete
      size={"small"}
      multiple
      options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
      limitTags={4}
      renderTags={(value, getTagProps) => value.map((option, index) => (
        <Tooltip title={option.name_universities} key={index}>
          <Chip
            label={option.name_universities}
            {...getTagProps({ index })}
            key={index}
            color={"info"}
            // variant={"outlined"}
          />
        </Tooltip>
      ))}
      disableCloseOnSelect
      groupBy={(option) => option.firstLetter}
      getOptionLabel={(option) => option.name_universities}
      renderOption={(props, option, { selected }) => {
        const { key, ...optionProps } = props;
        return (
          <li key={key} {...optionProps}>
            <Checkbox
              icon={icon}
              checkedIcon={checkedIcon}
              style={{ marginRight: 8 }}
              checked={selected}
            />
            {option.name_universities}
          </li>
        );
      }}
      sx={{
        width: 250,
      }}
      renderGroup={(params) => (
        <li key={params.key}>
          <GroupHeader>{params.group}</GroupHeader>
          <GroupItems>{params.children}</GroupItems>
        </li>
      )}
      renderInput={(params) => (
        <TextField {...params} label="Đơn vị công tác" placeholder="Đơn vị công tác" />
      )}
    />
  );
}

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
            placeholder: "Nhập tên chuyên gia...",
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

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
  {
    title: 'The Lord of the Rings: The Return of the King',
    year: 2003,
  },
  { title: 'The Good, the Bad and the Ugly', year: 1966 },
  { title: 'Fight Club', year: 1999 },
  {
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    year: 2001,
  },
  {
    title: 'Star Wars: Episode V - The Empire Strikes Back',
    year: 1980,
  },
  { title: 'Forrest Gump', year: 1994 },
  { title: 'Inception', year: 2010 },
  {
    title: 'The Lord of the Rings: The Two Towers',
    year: 2002,
  },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
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

const provinces = [
  {
    "state_code": "Bắc Giang",
    "state_name": "Bắc Giang"
  },
  {
    "state_code": "Bắc Kạn",
    "state_name": "Bắc Kạn"
  },
  {
    "state_code": "Cao Bằng",
    "state_name": "Cao Bằng"
  },
  {
    "state_code": "Hà Giang",
    "state_name": "Hà Giang"
  },
  {
    "state_code": "Lạng Sơn",
    "state_name": "Lạng Sơn"
  },
  {
    "state_code": "Phú Thọ",
    "state_name": "Phú Thọ"
  },
  {
    "state_code": "Quảng Ninh",
    "state_name": "Quảng Ninh"
  },
  {
    "state_code": "Thái Nguyên",
    "state_name": "Thái Nguyên"
  },
  {
    "state_code": "Tuyên Quang",
    "state_name": "Tuyên Quang"
  },
  {
    "state_code": "Lào Cai",
    "state_name": "Lào Cai"
  },
  {
    "state_code": "Yên Bái",
    "state_name": "Yên Bái"
  },
  {
    "state_code": "Điện Biên",
    "state_name": "Điện Biên"
  },
  {
    "state_code": "Hòa Bình",
    "state_name": "Hòa Bình"
  },
  {
    "state_code": "Lai Châu",
    "state_name": "Lai Châu"
  },
  {
    "state_code": "Sơn La",
    "state_name": "Sơn La"
  },
  {
    "state_code": "Bắc Ninh",
    "state_name": "Bắc Ninh"
  },
  {
    "state_code": "Hà Nam",
    "state_name": "Hà Nam"
  },
  {
    "state_code": "Hải Dương",
    "state_name": "Hải Dương"
  },
  {
    "state_code": "Hưng Yên",
    "state_name": "Hưng Yên"
  },
  {
    "state_code": "Nam Định",
    "state_name": "Nam Định"
  },
  {
    "state_code": "Ninh Bình",
    "state_name": "Ninh Bình"
  },
  {
    "state_code": "Thái Bình",
    "state_name": "Thái Bình"
  },
  {
    "state_code": "Vĩnh Phúc",
    "state_name": "Vĩnh Phúc"
  },
  {
    "state_code": "Hà Nội",
    "state_name": "Hà Nội"
  },
  {
    "state_code": "Hải Phòng",
    "state_name": "Hải Phòng"
  },
  {
    "state_code": "Hà Tĩnh",
    "state_name": "Hà Tĩnh"
  },
  {
    "state_code": "Nghệ An",
    "state_name": "Nghệ An"
  },
  {
    "state_code": "Quảng Bình",
    "state_name": "Quảng Bình"
  },
  {
    "state_code": "Quảng Trị",
    "state_name": "Quảng Trị"
  },
  {
    "state_code": "Thanh Hóa",
    "state_name": "Thanh Hóa"
  },
  {
    "state_code": "Thừa Thiên–Huế",
    "state_name": "Thừa Thiên–Huế"
  },
  {
    "state_code": "Đắk Lắk",
    "state_name": "Đắk Lắk"
  },
  {
    "state_code": "Đắk Nông",
    "state_name": "Đắk Nông"
  },
  {
    "state_code": "Gia Lai",
    "state_name": "Gia Lai"
  },
  {
    "state_code": "Kon Tum",
    "state_name": "Kon Tum"
  },
  {
    "state_code": "Lâm Đồng",
    "state_name": "Lâm Đồng"
  },
  {
    "state_code": "Bình Định",
    "state_name": "Bình Định"
  },
  {
    "state_code": "Bình Thuận",
    "state_name": "Bình Thuận"
  },
  {
    "state_code": "Khánh Hòa",
    "state_name": "Khánh Hòa"
  },
  {
    "state_code": "Ninh Thuận",
    "state_name": "Ninh Thuận"
  },
  {
    "state_code": "Phú Yên",
    "state_name": "Phú Yên"
  },
  {
    "state_code": "Quảng Nam",
    "state_name": "Quảng Nam"
  },
  {
    "state_code": "Quảng Ngãi",
    "state_name": "Quảng Ngãi"
  },
  {
    "state_code": "Đà Nẵng",
    "state_name": "Đà Nẵng"
  },
  {
    "state_code": "Bà Rịa–Vũng Tàu",
    "state_name": "Bà Rịa–Vũng Tàu"
  },
  {
    "state_code": "Bình Dương",
    "state_name": "Bình Dương"
  },
  {
    "state_code": "Bình Phước",
    "state_name": "Bình Phước"
  },
  {
    "state_code": "Đồng Nai",
    "state_name": "Đồng Nai"
  },
  {
    "state_code": "Tây Ninh",
    "state_name": "Tây Ninh"
  },
  {
    "state_code": "Hồ Chí Minh",
    "state_name": "Hồ Chí Minh"
  },
  {
    "state_code": "An Giang",
    "state_name": "An Giang"
  },
  {
    "state_code": "Bạc Liêu",
    "state_name": "Bạc Liêu"
  },
  {
    "state_code": "Bến Tre",
    "state_name": "Bến Tre"
  },
  {
    "state_code": "Cà Mau",
    "state_name": "Cà Mau"
  },
  {
    "state_code": "Đồng Tháp",
    "state_name": "Đồng Tháp"
  },
  {
    "state_code": "Hậu Giang",
    "state_name": "Hậu Giang"
  },
  {
    "state_code": "Kiên Giang",
    "state_name": "Kiên Giang"
  },
  {
    "state_code": "Long An",
    "state_name": "Long An"
  },
  {
    "state_code": "Sóc Trăng",
    "state_name": "Sóc Trăng"
  },
  {
    "state_code": "Tiền Giang",
    "state_name": "Tiền Giang"
  },
  {
    "state_code": "Trà Vinh",
    "state_name": "Trà Vinh"
  },
  {
    "state_code": "Vĩnh Long",
    "state_name": "Vĩnh Long"
  },
  {
    "state_code": "Cần Thơ",
    "state_name": "Cần Thơ"
  }
]

const universities = [
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b00f"
    },
    "world rank": "28240",
    "name_universities": "Vietnam Military Academy Dalat",
    "VN rank": "1"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b010"
    },
    "world rank": "27774",
    "name_universities": "Bac Ha International University",
    "VN rank": "2"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b011"
    },
    "world rank": "27531",
    "name_universities": "Ho Chi Minh National Academy of Politics and Public Administration",
    "VN rank": "3"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b012"
    },
    "world rank": "27171",
    "name_universities": "Phuongnam Economics Technics College",
    "VN rank": "4"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b013"
    },
    "world rank": "26507",
    "name_universities": "Kien Giang College",
    "VN rank": "5"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b014"
    },
    "world rank": "25524",
    "name_universities": "Vietnam Military Political Academy",
    "VN rank": "6"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b015"
    },
    "world rank": "25524",
    "name_universities": "Ocean University Vietnam",
    "VN rank": "7"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b016"
    },
    "world rank": "25331",
    "name_universities": "Hue College of Arts",
    "VN rank": "8"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b017"
    },
    "world rank": "25131",
    "name_universities": "Hue Conservatory",
    "VN rank": "9"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b018"
    },
    "world rank": "24940",
    "name_universities": "Eastern University of Technology",
    "VN rank": "10"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b019"
    },
    "world rank": "24761",
    "name_universities": "Quang Trung University",
    "VN rank": "11"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b01a"
    },
    "world rank": "23966",
    "name_universities": "Institute for Resources and Environment",
    "VN rank": "12"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b01b"
    },
    "world rank": "22983",
    "name_universities": "HCMC Hung Vuong University",
    "VN rank": "13"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b01c"
    },
    "world rank": "22835",
    "name_universities": "Graduate University of Science and Technology",
    "VN rank": "14"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b01d"
    },
    "world rank": "22415",
    "name_universities": "(3) International Training Institute for Materials Science",
    "VN rank": "15"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b01e"
    },
    "world rank": "22215",
    "name_universities": "Thai Binh University",
    "VN rank": "16"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b01f"
    },
    "world rank": "22086",
    "name_universities": "Phuong Dong University",
    "VN rank": "17"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b020"
    },
    "world rank": "21969",
    "name_universities": "London College for Design & Fashion Vietnam",
    "VN rank": "18"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b021"
    },
    "world rank": "21839",
    "name_universities": "National Institute of Education Management",
    "VN rank": "19"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b022"
    },
    "world rank": "21771",
    "name_universities": "Vietnam Academy of Military Science",
    "VN rank": "20"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b023"
    },
    "world rank": "21647",
    "name_universities": "Border Defense Force Academy",
    "VN rank": "21"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b024"
    },
    "world rank": "21584",
    "name_universities": "Van Xuan University of Technology",
    "VN rank": "22"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b025"
    },
    "world rank": "21223",
    "name_universities": "Graduate Academy of Social Sciences",
    "VN rank": "23"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b026"
    },
    "world rank": "21173",
    "name_universities": "Phu Xuan University",
    "VN rank": "24"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b027"
    },
    "world rank": "21071",
    "name_universities": "Binh Duong University of Economics and Technology",
    "VN rank": "25"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b028"
    },
    "world rank": "20463",
    "name_universities": "Dong Do University",
    "VN rank": "26"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b029"
    },
    "world rank": "20260",
    "name_universities": "Vietnam Academy of Logistics",
    "VN rank": "27"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b02a"
    },
    "world rank": "20181",
    "name_universities": "Vietnam Naval Academy",
    "VN rank": "28"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b02b"
    },
    "world rank": "20139",
    "name_universities": "Vietnam Air and Air Defense Forces Academy",
    "VN rank": "29"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b02c"
    },
    "world rank": "20001",
    "name_universities": "(3) Vietnam National University Center for International Education",
    "VN rank": "30"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b02d"
    },
    "world rank": "19833",
    "name_universities": "Friendship University of Technology and Management Hanoi",
    "VN rank": "31"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b02e"
    },
    "world rank": "19795",
    "name_universities": "University of Finance and Accountancy",
    "VN rank": "32"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b02f"
    },
    "world rank": "19795",
    "name_universities": "Vo Truong Toan University",
    "VN rank": "33"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b030"
    },
    "world rank": "19795",
    "name_universities": "Vietnam University of Traditional Medicine",
    "VN rank": "34"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b031"
    },
    "world rank": "19759",
    "name_universities": "Hanoi Industrial Textile Garment University",
    "VN rank": "35"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b032"
    },
    "world rank": "19552",
    "name_universities": "Vietnam National Academy of Music Hanoi Conservatory of Music",
    "VN rank": "36"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b033"
    },
    "world rank": "19486",
    "name_universities": "Dong Thap Community College",
    "VN rank": "37"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b034"
    },
    "world rank": "19353",
    "name_universities": "(3) Vietnam National University Hanoi School of Business",
    "VN rank": "38"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b035"
    },
    "world rank": "18969",
    "name_universities": "University of Labour and Social Affairs CSII",
    "VN rank": "39"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b036"
    },
    "world rank": "18969",
    "name_universities": "Academy of Journalism and Communication",
    "VN rank": "40"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b037"
    },
    "world rank": "18776",
    "name_universities": "Dong Nai University",
    "VN rank": "41"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b038"
    },
    "world rank": "18776",
    "name_universities": "Vietnam Academy of Science and Technology",
    "VN rank": "42"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b039"
    },
    "world rank": "18741",
    "name_universities": "Bac Giang University of Agriculture and Forestry",
    "VN rank": "43"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b03a"
    },
    "world rank": "18741",
    "name_universities": "Ho Chi Minh City Conservatory",
    "VN rank": "44"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b03b"
    },
    "world rank": "18698",
    "name_universities": "Bac Lieu University",
    "VN rank": "45"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b03c"
    },
    "world rank": "18621",
    "name_universities": "Hanoi University of Industrial Fine Arts",
    "VN rank": "46"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b03d"
    },
    "world rank": "18340",
    "name_universities": "Gia ?inh University",
    "VN rank": "47"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b03e"
    },
    "world rank": "18214",
    "name_universities": "Long An University of Economy and Industry",
    "VN rank": "48"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b03f"
    },
    "world rank": "18186",
    "name_universities": "Mekong University",
    "VN rank": "49"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b040"
    },
    "world rank": "17997",
    "name_universities": "Trade Union University",
    "VN rank": "50"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b041"
    },
    "world rank": "17927",
    "name_universities": "University of Transport and Communications Ho Chi Minh City",
    "VN rank": "51"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b042"
    },
    "world rank": "17712",
    "name_universities": "University of Education",
    "VN rank": "52"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b043"
    },
    "world rank": "17499",
    "name_universities": "C?n Th? University of Technology",
    "VN rank": "53"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b044"
    },
    "world rank": "17283",
    "name_universities": "University of Social Labor",
    "VN rank": "54"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b045"
    },
    "world rank": "17264",
    "name_universities": "Tay Nguyen University",
    "VN rank": "55"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b046"
    },
    "world rank": "17181",
    "name_universities": "Thai Binh University of Pharmacy",
    "VN rank": "56"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b047"
    },
    "world rank": "17161",
    "name_universities": "Vietnam Aviation Academy",
    "VN rank": "57"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b048"
    },
    "world rank": "17114",
    "name_universities": "Vietnam Military Medical Academy",
    "VN rank": "58"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b049"
    },
    "world rank": "16957",
    "name_universities": "Ho Chi Minh City University of Arts",
    "VN rank": "59"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b04a"
    },
    "world rank": "16700",
    "name_universities": "Central Library Vietnam National University Ho Chi Minh City",
    "VN rank": "60"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b04b"
    },
    "world rank": "16582",
    "name_universities": "Hue College of Teacher Training",
    "VN rank": "61"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b04c"
    },
    "world rank": "16559",
    "name_universities": "National Academy of Public Administration",
    "VN rank": "62"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b04d"
    },
    "world rank": "16513",
    "name_universities": "Vietnam University of Commerce",
    "VN rank": "63"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b04e"
    },
    "world rank": "16188",
    "name_universities": "Hai Phong Medical University",
    "VN rank": "64"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b04f"
    },
    "world rank": "16168",
    "name_universities": "Saigon Institute of Technology SaigonTech",
    "VN rank": "65"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b050"
    },
    "world rank": "16151",
    "name_universities": "Academy of Cryptography Techniques of Vietnam",
    "VN rank": "66"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b051"
    },
    "world rank": "15600",
    "name_universities": "Hong Bang International University",
    "VN rank": "67"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b052"
    },
    "world rank": "15386",
    "name_universities": "Asian Institute of Technology Center in Vietnam AITCV",
    "VN rank": "68"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b053"
    },
    "world rank": "15386",
    "name_universities": "Pham Ngoc Thach University of Medicine",
    "VN rank": "69"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b054"
    },
    "world rank": "15370",
    "name_universities": "Hai Phong University",
    "VN rank": "70"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b055"
    },
    "world rank": "15229",
    "name_universities": "Van Hien University",
    "VN rank": "71"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b056"
    },
    "world rank": "15126",
    "name_universities": "Saigon Technology University",
    "VN rank": "72"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b057"
    },
    "world rank": "15096",
    "name_universities": "Hung Vuong University",
    "VN rank": "73"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b058"
    },
    "world rank": "15072",
    "name_universities": "Can Tho University of Medicine and Pharmacy",
    "VN rank": "74"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b059"
    },
    "world rank": "15030",
    "name_universities": "Tan Tao University",
    "VN rank": "75"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b05a"
    },
    "world rank": "14984",
    "name_universities": "Fulbright University Vietnam",
    "VN rank": "76"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b05b"
    },
    "world rank": "14737",
    "name_universities": "PACE Institute of Leadership and Management",
    "VN rank": "77"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b05c"
    },
    "world rank": "14705",
    "name_universities": "Thang Long University",
    "VN rank": "78"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b05d"
    },
    "world rank": "14642",
    "name_universities": "Saigon International University",
    "VN rank": "79"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b05e"
    },
    "world rank": "14532",
    "name_universities": "Hue College of Agriculture and Forestry",
    "VN rank": "80"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b05f"
    },
    "world rank": "14532",
    "name_universities": "Hanoi University of Business and Technology",
    "VN rank": "81"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b060"
    },
    "world rank": "14429",
    "name_universities": "Ho Chi Minh City University of Transportation",
    "VN rank": "82"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b061"
    },
    "world rank": "14364",
    "name_universities": "East Asia University of Technology",
    "VN rank": "83"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b062"
    },
    "world rank": "14146",
    "name_universities": "Quangbinh University",
    "VN rank": "84"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b063"
    },
    "world rank": "13919",
    "name_universities": "University of Transport Technology",
    "VN rank": "85"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b064"
    },
    "world rank": "13858",
    "name_universities": "Hanoi University of Pharmacy",
    "VN rank": "86"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b065"
    },
    "world rank": "13786",
    "name_universities": "Vietnam Forestry University",
    "VN rank": "87"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b066"
    },
    "world rank": "13598",
    "name_universities": "Hai Phong Private University",
    "VN rank": "88"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b067"
    },
    "world rank": "13588",
    "name_universities": "Hanoi Architectural University",
    "VN rank": "89"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b068"
    },
    "world rank": "13543",
    "name_universities": "Hanoi University",
    "VN rank": "90"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b069"
    },
    "world rank": "13473",
    "name_universities": "Ba Ria Vung Tau University",
    "VN rank": "91"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b06a"
    },
    "world rank": "13313",
    "name_universities": "Diplomatic Academy of Vietnam",
    "VN rank": "92"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b06b"
    },
    "world rank": "13239",
    "name_universities": "Hanoi University of Culture",
    "VN rank": "93"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b06c"
    },
    "world rank": "13095",
    "name_universities": "Hanoi University of Industry",
    "VN rank": "94"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b06d"
    },
    "world rank": "13095",
    "name_universities": "VNU University of Economics and Busines",
    "VN rank": "95"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b06e"
    },
    "world rank": "13034",
    "name_universities": "Hanoi University of Social Sciences and Humanities",
    "VN rank": "96"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b06f"
    },
    "world rank": "12989",
    "name_universities": "British University Vietnam",
    "VN rank": "97"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b070"
    },
    "world rank": "12963",
    "name_universities": "Lac Hong University",
    "VN rank": "98"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b071"
    },
    "world rank": "12952",
    "name_universities": "Ho Chi Minh City University of Architecture",
    "VN rank": "99"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b072"
    },
    "world rank": "12901",
    "name_universities": "Binh Duong University",
    "VN rank": "100"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b073"
    },
    "world rank": "12824",
    "name_universities": "Banking University Ho Chi Minh City",
    "VN rank": "101"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b074"
    },
    "world rank": "12793",
    "name_universities": "Ho Chi Minh City University of Economics and Finance UEF",
    "VN rank": "102"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b075"
    },
    "world rank": "12653",
    "name_universities": "Dong Nai University of Technology",
    "VN rank": "103"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b076"
    },
    "world rank": "12514",
    "name_universities": "Academy of Finance",
    "VN rank": "104"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b077"
    },
    "world rank": "12461",
    "name_universities": "Ho Chi Minh City University of Education",
    "VN rank": "105"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b078"
    },
    "world rank": "12461",
    "name_universities": "Hanoi Open University",
    "VN rank": "106"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b079"
    },
    "world rank": "12295",
    "name_universities": "Banking Academy of Vietnam",
    "VN rank": "107"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b07a"
    },
    "world rank": "12205",
    "name_universities": "Dong A University",
    "VN rank": "108"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b07b"
    },
    "world rank": "12132",
    "name_universities": "Thai Nguyen University of Sciences in Vietnam",
    "VN rank": "109"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b07c"
    },
    "world rank": "11987",
    "name_universities": "Ho Chi Minh City University of Law",
    "VN rank": "110"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b07d"
    },
    "world rank": "11784",
    "name_universities": "Academy of Civil Engineering",
    "VN rank": "111"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b07e"
    },
    "world rank": "11637",
    "name_universities": "VinUniversity",
    "VN rank": "112"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b07f"
    },
    "world rank": "11336",
    "name_universities": "Hoa Sen University",
    "VN rank": "113"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b080"
    },
    "world rank": "11202",
    "name_universities": "Vietnam Maritime University",
    "VN rank": "114"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b081"
    },
    "world rank": "11101",
    "name_universities": "Hanoi University of Law",
    "VN rank": "115"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b082"
    },
    "world rank": "10761",
    "name_universities": "Hue College of Economics",
    "VN rank": "116"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b083"
    },
    "world rank": "10312",
    "name_universities": "University of Engineering and Technology",
    "VN rank": "117"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b084"
    },
    "world rank": "9957",
    "name_universities": "Hue College of Medicine",
    "VN rank": "118"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b085"
    },
    "world rank": "9798",
    "name_universities": "VNUHCM University of Social Sciences and Humanities",
    "VN rank": "119"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b086"
    },
    "world rank": "9645",
    "name_universities": "University of Languages and International Studies",
    "VN rank": "120"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b087"
    },
    "world rank": "9305",
    "name_universities": "Hanoi Pedagogical University N�2",
    "VN rank": "121"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b088"
    },
    "world rank": "9109",
    "name_universities": "Vietnam Academy of Social Sciences",
    "VN rank": "122"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b089"
    },
    "world rank": "8951",
    "name_universities": "Van Lang University",
    "VN rank": "123"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b08a"
    },
    "world rank": "8638",
    "name_universities": "Ho Chi Minh City University of Food Industry HCM",
    "VN rank": "124"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b08b"
    },
    "world rank": "8474",
    "name_universities": "FPT University",
    "VN rank": "125"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b08c"
    },
    "world rank": "8242",
    "name_universities": "Ho Chi Minh City University of Foreign Languages and Information Technology",
    "VN rank": "126"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b08d"
    },
    "world rank": "8057",
    "name_universities": "University of Science and Technology of Hanoi USTH Vietnam France University",
    "VN rank": "127"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b08e"
    },
    "world rank": "8047",
    "name_universities": "Dong Thap University",
    "VN rank": "128"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b08f"
    },
    "world rank": "7990",
    "name_universities": "EVN University of Electricity",
    "VN rank": "129"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b090"
    },
    "world rank": "7911",
    "name_universities": "Tay Bac University",
    "VN rank": "130"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b091"
    },
    "world rank": "7842",
    "name_universities": "Western University Hanoi",
    "VN rank": "131"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b092"
    },
    "world rank": "7537",
    "name_universities": "Foreign Trade University",
    "VN rank": "132"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b093"
    },
    "world rank": "7428",
    "name_universities": "University of Economics and Law",
    "VN rank": "133"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b094"
    },
    "world rank": "7251",
    "name_universities": "University of Transport and Communications",
    "VN rank": "134"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b095"
    },
    "world rank": "7151",
    "name_universities": "Thai Nguyen University of Technology",
    "VN rank": "135"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b096"
    },
    "world rank": "6850",
    "name_universities": "Vietnamese-German University",
    "VN rank": "136"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b097"
    },
    "world rank": "6729",
    "name_universities": "Thai Nguyen University of Agriculture and Forestry",
    "VN rank": "137"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b098"
    },
    "world rank": "6706",
    "name_universities": "Ho Chi Minh City University of Technology HUTECH/ ??i h?c C�ng Ngh? Th�nh ph? H? Ch� Minh HUTECH",
    "VN rank": "138"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b099"
    },
    "world rank": "6565",
    "name_universities": "Hong Duc University",
    "VN rank": "139"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b09a"
    },
    "world rank": "6364",
    "name_universities": "An Giang University",
    "VN rank": "140"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b09b"
    },
    "world rank": "6153",
    "name_universities": "Saigon University",
    "VN rank": "141"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b09c"
    },
    "world rank": "6149",
    "name_universities": "VNUHCM University of Information Technology",
    "VN rank": "142"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b09d"
    },
    "world rank": "6133",
    "name_universities": "Tra Vinh University",
    "VN rank": "143"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b09e"
    },
    "world rank": "5681",
    "name_universities": "Nguyen Tat Thanh University",
    "VN rank": "144"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b09f"
    },
    "world rank": "5572",
    "name_universities": "Thai Nguyen University",
    "VN rank": "145"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b0a0"
    },
    "world rank": "5506",
    "name_universities": "RMIT University Vietnam",
    "VN rank": "146"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b0a1"
    },
    "world rank": "5385",
    "name_universities": "VNUHCM University of Science",
    "VN rank": "147"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b0a2"
    },
    "world rank": "5321",
    "name_universities": "VNUHCM International University",
    "VN rank": "148"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b0a3"
    },
    "world rank": "5244",
    "name_universities": "Dalat University",
    "VN rank": "149"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b0a4"
    },
    "world rank": "4969",
    "name_universities": "Hanoi National University of Pedagogy",
    "VN rank": "150"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b0a5"
    },
    "world rank": "4941",
    "name_universities": "Hanoi School of Public Health",
    "VN rank": "151"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b0a6"
    },
    "world rank": "4907",
    "name_universities": "Quy Nhon University",
    "VN rank": "152"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b0a7"
    },
    "world rank": "4890",
    "name_universities": "Ho Chi Minh City Medicine and Pharmacy University",
    "VN rank": "153"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b0a8"
    },
    "world rank": "4875",
    "name_universities": "Vietnam National University of Agriculture",
    "VN rank": "154"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b0a9"
    },
    "world rank": "4854",
    "name_universities": "Hanoi University of Civil Engineering",
    "VN rank": "155"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b0aa"
    },
    "world rank": "4816",
    "name_universities": "Nha Trang University",
    "VN rank": "156"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b0ab"
    },
    "world rank": "4591",
    "name_universities": "Thu Dau Mot University",
    "VN rank": "157"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b0ac"
    },
    "world rank": "4585",
    "name_universities": "Thuyloi University",
    "VN rank": "158"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b0ad"
    },
    "world rank": "4453",
    "name_universities": "Hung Yen University of Technology and Education",
    "VN rank": "159"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b0ae"
    },
    "world rank": "4304",
    "name_universities": "N�ng L�m University",
    "VN rank": "160"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b0af"
    },
    "world rank": "4226",
    "name_universities": "Vinh University",
    "VN rank": "161"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b0b0"
    },
    "world rank": "4185",
    "name_universities": "Ho Chi Minh City University of Technology and Education",
    "VN rank": "162"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b0b1"
    },
    "world rank": "4135",
    "name_universities": "Le Quy Don Technical University",
    "VN rank": "163"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b0b2"
    },
    "world rank": "3999",
    "name_universities": "VNU Hanoi University of Science",
    "VN rank": "164"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b0b3"
    },
    "world rank": "3951",
    "name_universities": "National Economics University",
    "VN rank": "165"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b0b4"
    },
    "world rank": "3663",
    "name_universities": "Can Tho University",
    "VN rank": "166"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b0b5"
    },
    "world rank": "3609",
    "name_universities": "Hanoi Medical University",
    "VN rank": "167"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b0b6"
    },
    "world rank": "3599",
    "name_universities": "(1) Ho Chi Minh City Open University /Tr???ng ?a?i ho?c M?? th�nh ph? H? Ch� Minh",
    "VN rank": "168"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b0b7"
    },
    "world rank": "3295",
    "name_universities": "Posts and Telecommunications Institute of Technology",
    "VN rank": "169"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b0b8"
    },
    "world rank": "3266",
    "name_universities": "Vietnam National University Ho Chi Minh City",
    "VN rank": "170"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b0b9"
    },
    "world rank": "2969",
    "name_universities": "Hanoi University of Mining and Geology",
    "VN rank": "171"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b0ba"
    },
    "world rank": "2823",
    "name_universities": "University of Economics Ho Chi Minh City",
    "VN rank": "172"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b0bb"
    },
    "world rank": "2623",
    "name_universities": "Hue University",
    "VN rank": "173"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b0bc"
    },
    "world rank": "2435",
    "name_universities": "Hanoi University of Science and Technology",
    "VN rank": "174"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b0bd"
    },
    "world rank": "2270",
    "name_universities": "University of Danang",
    "VN rank": "175"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b0be"
    },
    "world rank": "2166",
    "name_universities": "Ho Chi Minh City University of Industry",
    "VN rank": "176"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b0bf"
    },
    "world rank": "1782",
    "name_universities": "VNUHCM University of Technology",
    "VN rank": "177"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b0c0"
    },
    "world rank": "1471",
    "name_universities": "Duy Tan University",
    "VN rank": "178"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b0c1"
    },
    "world rank": "1302",
    "name_universities": "Ton Duc Thang University",
    "VN rank": "179"
  },
  {
    "_id": {
      "$oid": "61e68a9cde266dfc4b84b0c2"
    },
    "world rank": "959",
    "name_universities": "Vietnam National University Hanoi",
    "VN rank": "180"
  }]