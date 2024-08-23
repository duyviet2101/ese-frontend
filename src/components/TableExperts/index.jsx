import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import LinkMui from '@mui/material/Link';
import { Chip } from '@mui/material';

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
    field: "reasearchArea",
    width: 130,
  },
  {
    headerName: "Đơn vị công tác",
    field: "workUnit",
    width: 130,
  },
  {
    headerName: "Địa chỉ",
    field: "address",
    width: 130,
  },
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
      // <LinkMui href={params.row.profile} target="_blank" underline="none">
      //   Chi tiết
      // </LinkMui>
      <Chip
        label="Chi tiết"
        component="a"
        href={params.row.profile}
        target={"_blank"}
        clickable
        onClick={(event) => event.stopPropagation()}
      />
    ),
    disableClickEventBubbling: true
  }
];

export default function TableExperts() {
  const rows = [
    {
      "id": 1,
      "avatar": "https://www.w3schools.com/howto/img_avatar.png",
      "name": "Nguyễn Văn 1",
      "degree": "ThS",
      "reasearchArea": "AI",
      "workUnit": "ĐH Bách Khoa",
      "address": "Số 10 Đường ABC, Quận XYZ, TP.HCM",
      "gender": "Nam",
      "phoneNumber": "0123456780",
      "profile": "http://example.com/profile1"
    },
    {
      "id": 2,
      "avatar": "https://www.w3schools.com/howto/img_avatar.png",
      "name": "Nguyễn Văn 2",
      "degree": "TS",
      "reasearchArea": "Data Science",
      "workUnit": "ĐH Khoa học Tự nhiên",
      "address": "Số 11 Đường ABC, Quận XYZ, TP.HCM",
      "gender": "Nữ",
      "phoneNumber": "0123456781",
      "profile": "http://example.com/profile2"
    },
    {
      "id": 3,
      "avatar": "https://www.w3schools.com/howto/img_avatar.png",
      "name": "Nguyễn Văn 3",
      "degree": "PGS",
      "reasearchArea": "Robotics",
      "workUnit": "ĐH Kinh tế Quốc dân",
      "address": "Số 12 Đường ABC, Quận XYZ, TP.HCM",
      "gender": "Nam",
      "phoneNumber": "0123456782",
      "profile": "http://example.com/profile3"
    },
    {
      "id": 4,
      "avatar": "https://www.w3schools.com/howto/img_avatar.png",
      "name": "Nguyễn Văn 4",
      "degree": "GS",
      "reasearchArea": "Software Engineering",
      "workUnit": "ĐH Sư phạm",
      "address": "Số 13 Đường ABC, Quận XYZ, TP.HCM",
      "gender": "Nữ",
      "phoneNumber": "0123456783",
      "profile": "http://example.com/profile4"
    },
    {
      "id": 5,
      "avatar": "https://www.w3schools.com/howto/img_avatar.png",
      "name": "Nguyễn Văn 5",
      "degree": "ThS",
      "reasearchArea": "AI",
      "workUnit": "ĐH Bách Khoa",
      "address": "Số 14 Đường ABC, Quận XYZ, TP.HCM",
      "gender": "Nam",
      "phoneNumber": "0123456784",
      "profile": "http://example.com/profile5"
    },
    {
      "id": 6,
      "avatar": "https://www.w3schools.com/howto/img_avatar.png",
      "name": "Nguyễn Văn 6",
      "degree": "TS",
      "reasearchArea": "Data Science",
      "workUnit": "ĐH Khoa học Tự nhiên",
      "address": "Số 15 Đường ABC, Quận XYZ, TP.HCM",
      "gender": "Nữ",
      "phoneNumber": "0123456785",
      "profile": "http://example.com/profile6"
    },
    {
      "id": 7,
      "avatar": "https://www.w3schools.com/howto/img_avatar.png",
      "name": "Nguyễn Văn 7",
      "degree": "PGS",
      "reasearchArea": "Robotics",
      "workUnit": "ĐH Kinh tế Quốc dân",
      "address": "Số 16 Đường ABC, Quận XYZ, TP.HCM",
      "gender": "Nam",
      "phoneNumber": "0123456786",
      "profile": "http://example.com/profile7"
    },
    {
      "id": 8,
      "avatar": "https://www.w3schools.com/howto/img_avatar.png",
      "name": "Nguyễn Văn 8",
      "degree": "GS",
      "reasearchArea": "Software Engineering",
      "workUnit": "ĐH Sư phạm",
      "address": "Số 17 Đường ABC, Quận XYZ, TP.HCM",
      "gender": "Nữ",
      "phoneNumber": "0123456787",
      "profile": "http://example.com/profile8"
    },
    {
      "id": 9,
      "avatar": "https://www.w3schools.com/howto/img_avatar.png",
      "name": "Nguyễn Văn 9",
      "degree": "ThS",
      "reasearchArea": "AI",
      "workUnit": "ĐH Bách Khoa",
      "address": "Số 18 Đường ABC, Quận XYZ, TP.HCM",
      "gender": "Nam",
      "phoneNumber": "0123456788",
      "profile": "http://example.com/profile9"
    },
    {
      "id": 10,
      "avatar": "https://www.w3schools.com/howto/img_avatar.png",
      "name": "Nguyễn Văn 10",
      "degree": "TS",
      "reasearchArea": "Data Science",
      "workUnit": "ĐH Khoa học Tự nhiên",
      "address": "Số 19 Đường ABC, Quận XYZ, TP.HCM",
      "gender": "Nữ",
      "phoneNumber": "0123456789",
      "profile": "http://example.com/profile10"
    }
  ];

  return (
    <div style={{ height: 600, width: '100%' }}>
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
        }}
      />
    </div>
  );
}