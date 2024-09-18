import Box from '@mui/material/Box';
import SearchTheseToolbar, { SearchNameBox, SelectDate, SelectStatus } from '~/components/SearchTheseToolbar/index.jsx';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { DataGrid } from '@mui/x-data-grid';
import Tooltip from '@mui/material/Tooltip';
import { Chip } from '@mui/material';
import { Link } from 'react-router-dom';
import { useMemo, useRef, useState } from 'react';
import moment from 'moment';
import pushToast from '~/helpers/sonnerToast.js';

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

const columns = [
  // { field: 'id', headerName: 'STT', width: 40 },
  { field: 'title', headerName: 'Tên luận án', width: 130 },
  {
    headerName: "Cấp độ",
    field: "degree",
    width: 70,
  },
  {
    headerName: "Từ khoá",
    field: "keywords",
    width: 130,
    renderCell: (params) => {
      return params?.row?.keywords?.map((keyword, index) => (
        <Tooltip title={keyword} key={index}>
          <Chip
            key={index}
            label={keyword}
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
    field: "defense_date",
    width: 110,
    renderCell: (params) => {
      return moment(params.row.defense_date).format("DD/MM/YYYY");
    }
  },
  {
    headerName: "Người bảo vệ",
    field: "candidate.name",
    width: 130,
    renderCell: (params) => {
      return params.row?.candidate?.name;
    }
  },
  {
    headerName: "Số điện thoại",
    field: "candidate.phone",
    width: 130,
    renderCell: (params) => {
      const handleCopy = (value) => {
        navigator.clipboard.writeText(value);
        pushToast("Đã sao chép " + value + " vào bộ nhớ tạm!", "success");
      }

      return (
        <Tooltip title={params.row?.candidate?.phone}
                 key={params.row?.candidate?.phone}>
          <Chip
            key={params.row?.candidate?.phone}
            label={params.row?.candidate?.phone}
            size="small"
            color={"primary"}
            variant={"outlined"}
            sx={{
              marginRight: 0.5,
              marginBottom: 0.5
            }}
            onClick={(e) => {
              handleCopy(params.row?.candidate?.phone);
              e.stopPropagation();
            }}
          />
        </Tooltip>
      )
    }
  },
  {
    headerName: "Trạng thái",
    field: "committees.status",
    width: 170,
    renderCell: (params) => {
      const value = params.row.committees.status;
      const label = status.find((item) => item.value === value)?.label || "Không xác định";
      const color = status.find((item) => item.value === value)?.color || "default";

      return (
        <Tooltip title={label}>
          <Chip
            label={label}
            color={color}
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
    renderCell: (params) => (
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
            to={`/thesis/${params.row._id}/search-experts?what=${params.row.keywords.join(",")}`}
            clickable
            color={"primary"}
            onClick={(event) => event.stopPropagation()}
          />
        </Tooltip>
        <Tooltip title={"Chi tiết/Cập nhật"}>
          <Chip
            label="Chi tiết/Cập nhật"
            component={Link}
            size={"small"}
            to={`/thesis/${params.row._id}`}
            clickable
            onClick={(event) => event.stopPropagation()}
          />
        </Tooltip>
      </Box>
    ),
    disableClickEventBubbling: true
  }
];

const PAGE_SIZE = 10;

export default function TableTheses() {
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
      <SearchTheseToolbar
        setRows={setRows}
        setPageInfo={setPageInfo}
        pageSize={PAGE_SIZE}
        paginationModel={paginationModel}
      />
      <Divider />
      <div style={{ height: 800, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          rowCount={rowCount}
          paginationModel={paginationModel}
          paginationMode={"server"}
          onPaginationModelChange={setPaginationModel}
          pageSizeOptions={[PAGE_SIZE]}
          getRowId={(row) => row._id}
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