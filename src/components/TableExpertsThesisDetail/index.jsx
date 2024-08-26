import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import { Chip, FormControl, InputLabel, Select } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';

const columns = [
  { field: 'id', headerName: 'STT', width: 40 },
  {
    headerName: "Avatar",
    field: "avatar",
    width: 60,
    renderCell: (params) => (
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          gap: 1,
          width: "100%",
          height: "100%"
        }}
      >
        <Avatar
          src={params.row.avatar}
          alt=""
          style={{
            width: 30,
            height: 30,
            borderRadius: '50%',
          }}
        />
      </Box>
    )
  },
  { field: 'name', headerName: 'Họ và tên', width: 130 },
  {
    headerName: "Học vị",
    field: "degree",
    width: 70,
  },
  {
    headerName: "Lĩnh vực nghiên cứu",
    field: "researchArea",
    width: 130,
    renderCell: (params) => {
      return params.row.researchArea.map((area, index) => (
        <Tooltip title={area} key={index}>
          <Chip
            key={index}
            label={area}
            size="small"
            color={"primary"}
            variant={"outlined"}
            sx={{
              marginRight: 0.5,
              marginBottom: 0.5
            }}
          />
        </Tooltip>
      ));
    }
  },
  {
    headerName: "Đơn vị công tác",
    field: "workUnit",
    width: 130,
  },
  // {
  //   headerName: "Địa chỉ",
  //   field: "address",
  //   width: 190,
  // },
  {
    headerName: "Giới tính",
    field: "gender",
    width: 70,
  },
  {
    headerName: "Số điện thoại",
    field: "phoneNumber",
    width: 110,
  },
  {
    headerName: "Profile",
    field: "profile",
    width: 100,
    renderCell: (params) => (
      <Tooltip title={params.row.profile}>
        <Chip
          label="Chi tiết"
          component="a"
          href={params.row.profile}
          target={"_blank"}
          clickable
          onClick={(event ) => event.stopPropagation()}
        />
      </Tooltip>
    ),
    disableClickEventBubbling: true
  },
  {
    headerName: "Status",
    field: "status",
    width: 150,
    renderCell: (params) => {
      return (
        SelectStatus(params.row.status)
      )
    }
  }
];

export default function TableExpertsThesisDetail() {
  const rows = [
    {
      "id": 1,
      "avatar": "https://www.w3schools.com/howto/img_avatar.png",
      "name": "Nguyễn Văn 1",
      "degree": "ThS",
      "researchArea": ["AI"],
      "workUnit": "ĐH Bách Khoa",
      "address": "Số 10 Đường ABC, Quận XYZ, TP.HCM",
      "gender": "Nam",
      "phoneNumber": "0123456780",
      "profile": "http://example.com/profile1",
      "status": "in-progress"
    },
    {
      "id": 2,
      "avatar": "https://www.w3schools.com/howto/img_avatar.png",
      "name": "Nguyễn Văn 2",
      "degree": "TS",
      "researchArea": ["Data Science", "AI", "IT"],
      "workUnit": "ĐH Khoa học Tự nhiên",
      "address": "Số 11 Đường ABC, Quận XYZ, TP.HCM",
      "gender": "Nữ",
      "phoneNumber": "0123456781",
      "profile": "http://example.com/profile2",
      "status": "in-progress"
    },
    {
      "id": 3,
      "avatar": "https://www.w3schools.com/howto/img_avatar.png",
      "name": "Nguyễn Văn 3",
      "degree": "PGS",
      "researchArea": ["Robotics"],
      "workUnit": "ĐH Kinh tế Quốc dân",
      "address": "Số 12 Đường ABC, Quận XYZ, TP.HCM",
      "gender": "Nam",
      "phoneNumber": "0123456782",
      "profile": "http://example.com/profile3",
      "status": "in-progress"
    },
    {
      "id": 4,
      "avatar": "https://www.w3schools.com/howto/img_avatar.png",
      "name": "Nguyễn Văn 4",
      "degree": "GS",
      "researchArea": ["Software Engineering"],
      "workUnit": "ĐH Sư phạm",
      "address": "Số 13 Đường ABC, Quận XYZ, TP.HCM",
      "gender": "Nữ",
      "phoneNumber": "0123456783",
      "profile": "http://example.com/profile4",
      "status": "in-progress"
    },
    {
      "id": 5,
      "avatar": "https://www.w3schools.com/howto/img_avatar.png",
      "name": "Nguyễn Văn 5",
      "degree": "ThS",
      "researchArea": ["AI"],
      "workUnit": "ĐH Bách Khoa",
      "address": "Số 14 Đường ABC, Quận XYZ, TP.HCM",
      "gender": "Nam",
      "phoneNumber": "0123456784",
      "profile": "http://example.com/profile5",
      "status": "in-progress"
    },
    {
      "id": 6,
      "avatar": "https://www.w3schools.com/howto/img_avatar.png",
      "name": "Nguyễn Văn 6",
      "degree": "TS",
      "researchArea": ["Data Science"],
      "workUnit": "ĐH Khoa học Tự nhiên",
      "address": "Số 15 Đường ABC, Quận XYZ, TP.HCM",
      "gender": "Nữ",
      "phoneNumber": "0123456785",
      "profile": "http://example.com/profile6",
      "status": "in-progress"
    },
    {
      "id": 7,
      "avatar": "https://www.w3schools.com/howto/img_avatar.png",
      "name": "Nguyễn Văn 7",
      "degree": "PGS",
      "researchArea": ["Robotics"],
      "workUnit": "ĐH Kinh tế Quốc dân",
      "address": "Số 16 Đường ABC, Quận XYZ, TP.HCM",
      "gender": "Nam",
      "phoneNumber": "0123456786",
      "profile": "http://example.com/profile7",
      "status": "in-progress"
    },
    {
      "id": 8,
      "avatar": "https://www.w3schools.com/howto/img_avatar.png",
      "name": "Nguyễn Văn 8",
      "degree": "GS",
      "researchArea": ["Software Engineering"],
      "workUnit": "ĐH Sư phạm",
      "address": "Số 17 Đường ABC, Quận XYZ, TP.HCM",
      "gender": "Nữ",
      "phoneNumber": "0123456787",
      "profile": "http://example.com/profile8",
      "status": "in-progress"
    },
    {
      "id": 9,
      "avatar": "https://www.w3schools.com/howto/img_avatar.png",
      "name": "Nguyễn Văn 9",
      "degree": "ThS",
      "researchArea": ["AI"],
      "workUnit": "ĐH Bách Khoa",
      "address": "Số 18 Đường ABC, Quận XYZ, TP.HCM",
      "gender": "Nam",
      "phoneNumber": "0123456788",
      "profile": "http://example.com/profile9",
      "status": "in-progress"
    },
    {
      "id": 10,
      "avatar": "https://www.w3schools.com/howto/img_avatar.png",
      "name": "Nguyễn Văn 10",
      "degree": "TS",
      "researchArea": ["Data Science"],
      "workUnit": "ĐH Khoa học Tự nhiên",
      "address": "Số 19 Đường ABC, Quận XYZ, TP.HCM",
      "gender": "Nữ",
      "phoneNumber": "0123456789",
      "profile": "http://example.com/profile10",
      "status": "in-progress"
    }
  ];
  return (
    <>
      <div style={{ height: 800, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          // disableRowSelectionOnClick={true}
          getRowHeight={() => "auto"}
          sx={{
            "& .MuiDataGrid-columnsContainer": {
              backgroundColor: "primary.main",
              color: "white",
              fontWeight: "bold",
            },
            "& .MuiDataGrid-row": {
              "&:nth-of-type(odd)": {
                backgroundColor: "rgba(144, 202, 249, 0.16)",
              },
            },
            "& .MuiDataGrid-row:hover": {
              backgroundColor: "rgba(0, 0, 0, 0.04)",
            },
            "& .MuiDataGrid-row.Mui-selected": {
              backgroundColor: "rgba(144,202,249,0.51)",
            },
            "& .MuiDataGrid-topContainer .MuiDataGrid-columnHeaders .MuiDataGrid-row--borderBottom": {
              backgroundColor: "rgb(0,128,255)",
              color: "white",
            },
            "& .MuiDataGrid-columnHeader": {
              backgroundColor: "rgb(0,128,255)",
              color: "white",
            },
            "& .MuiDataGrid-cell:focus": {
              outline: "none",
            },
            "& .MuiDataGrid-cell": {
              cursor: "pointer"
            },
            '&.MuiDataGrid-root--densityCompact .MuiDataGrid-cell': { py: '8px' },
            '&.MuiDataGrid-root--densityStandard .MuiDataGrid-cell': { py: '15px' },
            '&.MuiDataGrid-root--densityComfortable .MuiDataGrid-cell': { py: '22px' },
          }}
        />
      </div>
    </>
  )
}

function SelectStatus(initStatus = "") {
  const [statusState, setStatusState] = useState(initStatus);

  const handleChangeStatus = (event) => {
    setStatusState(event.target.value);
  }

  return (
    <FormControl
      size={"small"}
      // sx={{
      //   minWidth: "150px"
      // }}
    >
      <Select
        id="select-action-input"
        value={statusState}
        displayEmpty
        onChange={handleChangeStatus}
        disableUnderline
        variant={"standard"}
        sx={{
          "& .MuiSelect-select": {
            padding: 0,
            border: "none"
          },
          '.MuiOutlinedInput-notchedOutline': { border: 0 }
        }}
      >
        {status.map((item, index) => (
          <MenuItem key={index} value={item.value}>
            <Chip
              label={item.label}
              color={item.color}
              size={"small"}
            />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )

}

const status = [
  {
    label: "Đồng ý",
    value: "accepted",
    color: "success"
  },
  {
    label: "Đang liên lạc",
    value: "in-progress",
    color: "info"
  },
  {
    label: "Từ chối",
    value: "rejected",
    color: "error"
  }
];