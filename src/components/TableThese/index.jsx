import Box from '@mui/material/Box';
import { SearchNameBox, SelectDate, SelectStatus } from '~/components/SelectFiltersThese/index.jsx';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { DataGrid } from '@mui/x-data-grid';
import Tooltip from '@mui/material/Tooltip';
import { Chip } from '@mui/material';
import { Link } from 'react-router-dom';

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

const columns = [
  { field: 'id', headerName: 'STT', width: 40 },
  { field: 'name', headerName: 'Tên luận án', width: 130 },
  {
    headerName: "Cấp độ",
    field: "level",
    width: 70,
  },
  {
    headerName: "Chủ đề",
    field: "topics",
    width: 130,
    renderCell: (params) => {
      return params.row.topics.map((topic, index) => (
        <Tooltip title={topic} key={index}>
          <Chip
            key={index}
            label={topic}
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
    headerName: "Ngày bảo vệ",
    field: "deadline",
    width: 110,
  },
  {
    headerName: "Người bảo vệ",
    field: "person",
    width: 130,
  },
  {
    headerName: "Số điện thoại",
    field: "phoneNumber",
    width: 110,
  },
  {
    headerName: "Trạng thái",
    field: "status",
    width: 170,
    renderCell: (params) => {
      const index = status.findIndex((item) => item.value === params.row.status);
      return (
        <Tooltip title={status[index].label}>
          <Chip
            label={status[index].label}
            color={status[index].color}
            clickable={false}
            size={"small"}
            sx={{
              marginRight: 0.5,
              marginBottom: 0.5
            }}
            onClick={(event) => event.stopPropagation()}
          />
        </Tooltip>
      )
    },
    disableClickEventBubbling: true
  },
  {
    headerName: "Hành động",
    field: "actions",
    width: 200,
    renderCell: () => (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 1
        }}
      >
        <Tooltip title={"Tìm kiếm hội đồng"}>
          <Chip
            label="Tìm kiếm hội đồng"
            component={Link}
            size={"small"}
            to={"/search-experts"}
            clickable
            color={"primary"}
            onClick={(event) => event.stopPropagation()}
          />
        </Tooltip>
        <Tooltip title={"Chi tiết"}>
          <Chip
            label="Chi tiết"
            component={Link}
            size={"small"}
            to={"/thesis-detail"}
            clickable
            onClick={(event) => event.stopPropagation()}
          />
        </Tooltip>
      </Box>
    ),
    disableClickEventBubbling: true
  }
];

export default function TableThese() {
  const rows = [
    {
      "id": 1,
      "avatar": "https://www.w3schools.com/howto/img_avatar.png",
      "name": "Luận Án 1",
      "level": "ThS",
      "topics": ["AI"],
      "deadline": "01/01/2024",
      "person": "ĐH Bách Khoa",
      "phoneNumber": "0123456780",
      "status": "in-progress"
    },
    {
      "id": 2,
      "avatar": "https://www.w3schools.com/howto/img_avatar.png",
      "name": "Luận Án 2",
      "level": "TS",
      "topics": ["Data Science", "AI", "IT"],
      "deadline": "01/01/2024",
      "person": "ĐH Khoa học Tự nhiên",
      "phoneNumber": "0123456781",
      "status": "backlog"
    },
    {
      "id": 3,
      "avatar": "https://www.w3schools.com/howto/img_avatar.png",
      "name": "Luận Án 3",
      "level": "PGS",
      "topics": ["Robotics"],
      "deadline": "01/01/2024",
      "person": "ĐH Kinh tế Quốc dân",
      "phoneNumber": "0123456782",
      "status": "backlog"
    },
    {
      "id": 4,
      "avatar": "https://www.w3schools.com/howto/img_avatar.png",
      "name": "Luận Án 4",
      "level": "GS",
      "topics": ["Software Engineering"],
      "deadline": "01/01/2024",
      "person": "ĐH Sư phạm",
      "phoneNumber": "0123456783",
      "status": "done"
    },
    {
      "id": 5,
      "avatar": "https://www.w3schools.com/howto/img_avatar.png",
      "name": "Luận Án 5",
      "level": "ThS",
      "topics": ["AI"],
      "deadline": "01/01/2024",
      "person": "ĐH Bách Khoa",
      "phoneNumber": "0123456784",
      "status": "done"
    },
    {
      "id": 6,
      "avatar": "https://www.w3schools.com/howto/img_avatar.png",
      "name": "Luận Án 6",
      "level": "TS",
      "topics": ["Data Science"],
      "deadline": "01/01/2024",
      "person": "ĐH Khoa học Tự nhiên",
      "phoneNumber": "0123456785",
      "status": "in-progress"
    },
    {
      "id": 7,
      "avatar": "https://www.w3schools.com/howto/img_avatar.png",
      "name": "Luận Án 7",
      "level": "PGS",
      "topics": ["Robotics"],
      "deadline": "01/01/2024",
      "person": "ĐH Kinh tế Quốc dân",
      "phoneNumber": "0123456786",
      "status": "in-progress"
    },
    {
      "id": 8,
      "avatar": "https://www.w3schools.com/howto/img_avatar.png",
      "name": "Luận Án 8",
      "level": "GS",
      "topics": ["Software Engineering"],
      "deadline": "01/01/2024",
      "person": "ĐH Sư phạm",
      "phoneNumber": "0123456787",
      "status": "in-progress"
    },
    {
      "id": 9,
      "avatar": "https://www.w3schools.com/howto/img_avatar.png",
      "name": "Luận Án 9",
      "level": "ThS",
      "topics": ["AI"],
      "deadline": "01/01/2024",
      "person": "ĐH Bách Khoa",
      "phoneNumber": "0123456788",
      "status": "in-progress"
    },
    {
      "id": 10,
      "avatar": "https://www.w3schools.com/howto/img_avatar.png",
      "name": "Luận Án 10",
      "level": "TS",
      "topics": ["Data Science"],
      "deadline": "01/01/2024",
      "person": "ĐH Khoa học Tự nhiên",
      "phoneNumber": "0123456789",
      "status": "in-progress"
    }
  ];

  return (
    <Box
      sx={{
        marginTop: '20px',
        padding: "20px",
        backgroundColor: "#f1f1f1",
        borderRadius: "8px",
        display: "flex",
        flexDirection: "column",
        gap: 1,
      }}
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
        <SearchNameBox />
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
        <SelectDate />
        <SelectStatus />
      </Box>
      <Divider />
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
    </Box>
  )
}