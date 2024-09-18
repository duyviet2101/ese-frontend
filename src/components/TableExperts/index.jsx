import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import { Chip } from '@mui/material';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import { useMemo, useRef, useState } from 'react';
import SearchToolBar from '~/components/SearchExpertToolBar/index.jsx';
import pushToast from '~/helpers/sonnerToast.js';
import InfoExpertDrawer from '~/components/InfoExpertDrawer/index.jsx';

const columns = [
  {
    headerName: "Avatar",
    field: "img",
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
          src={"https://qldt.neu.edu.vn/QuanLyLLKH/Upload/Avatar/" + params.row.img}
          alt=""
          style={{
            width: 30,
            height: 30,
            borderRadius: '50%',
          }}
        />
      </Box>
    ),
    valueFormatter: (value) => {

    }
  },
  { field: 'name', headerName: 'Họ và tên', width: 130 },
  {
    headerName: "Học vị",
    field: "degree",
    width: 70,
  },
  {
    headerName: "Lĩnh vực nghiên cứu",
    field: "research_area",
    width: 190,
    renderCell: (params) => {
      return params.row.research_area.map((area, index) => (
          <Tooltip title={area.name} key={index}>
            <Chip
              key={index}
              label={area.name}
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
    },
    valueFormatter: (value) => {
      return value.map((area) => area.name).join(", ");
    }
  },
  {
    headerName: "Đơn vị công tác",
    field: "company",
    width: 130,
  },
  {
    headerName: "Địa chỉ",
    field: "address",
    width: 190,
  },
  {
    headerName: "Giới tính",
    field: "gender",
    width: 70,
    renderCell: (params) => {
      return params.row.gender === 1 ? "Nam" : "Nữ";
    },
    valueFormatter: (value) => {
      return value === 1 ? "Nam" : "Nữ";
    }
  },
  {
    headerName: "Profile/Liên lạc",
    field: "link_profile",
    width: 170,
    renderCell: (params) => {
      const handleCopy = (value) => {
        navigator.clipboard.writeText(value);
        pushToast("Đã sao chép " + value + " vào bộ nhớ tạm!", "success");
      }

      return (
        <Box
          sx={{
            display: 'flex',
            gap: 1,
            flexWrap: "wrap"
          }}
        >
          <InfoExpertDrawer id={params.row.id}/>
          {params?.row?.phone?.trim() && <Tooltip title={params.row.phone}>
            <Chip
              label={params.row.phone}
              variant={"outlined"}
              color={"primary"}
              onClick={(event) => {
                event.stopPropagation();
                handleCopy(params.row.phone);
              }}
            />
          </Tooltip>}
          {params?.row?.email?.trim() && <Tooltip title={params.row.email}>
            <Chip
              label={params.row.email}
              variant={"outlined"}
              color={"primary"}
              onClick={(event) => {
                event.stopPropagation();
                handleCopy(params.row.email);
              }}
            />
          </Tooltip>}
          {params?.row?.other_link?.trim() && <Tooltip title={params.row.other_link}>
            <Chip
              label={"Khác"}
              variant={"outlined"}
              href={params.row.other_link}
              target={"_blank"}
              clickable
              component={"a"}
              color={"primary"}
              onClick={(event) => event.stopPropagation()}
            />
          </Tooltip>}
        </Box>
      )
    },
    disableClickEventBubbling: true,
    valueFormatter: (value) => {
      return value || "Chưa cập nhật";
    },
  }
];

const PAGE_SIZE = 10;

export default function TableExperts() {
  const [rows, setRows] = useState([]);
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: PAGE_SIZE
  });

  const [pageInfo, setPageInfo] = useState({
    totalRowCount: 0,
  });

  const rowCountRef = useRef(pageInfo?.totalRowCount || 0);

  const rowCount = useMemo(() => {
    if (pageInfo?.totalRowCount !== undefined) {
      rowCountRef.current = pageInfo.totalRowCount;
    }
    return rowCountRef.current;
  }, [pageInfo?.totalRowCount]);

  return (
    <>
      <SearchToolBar
        setRows={setRows}
        setPageInfo={setPageInfo}
        pageSize={PAGE_SIZE}
        paginationModel={paginationModel}
      />
      <Divider/>
      <div style={{ height: 1000, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          rowCount={rowCount}
          loading={false}
          paginationModel={paginationModel}
          paginationMode={"server"}
          onPaginationModelChange={setPaginationModel}
          pageSizeOptions={[PAGE_SIZE]}
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
          slots={{
            toolbar: GridToolbar
          }}
        />
      </div>
      <Divider/>
      {/*<Button
        variant="contained"
        color={"success"}
        sx={{
          width: "20%",
          alignSelf: "flex-end",
        }}
        startIcon={<IoPersonAdd/>}
      >
        Thêm vào hội đồng
      </Button>*/}
    </>
  );
}