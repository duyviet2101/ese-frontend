import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import { Chip, FormControl, InputLabel, Select } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import pushToast from '~/helpers/sonnerToast.js';
import { useForm } from 'react-hook-form';
import { pick } from 'lodash';
import Request from '~/utils/request.js';
import { useParams } from 'react-router-dom';
import Button from '@mui/material/Button';

const columns = ({
  register = null,
}) => {
  return [
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
    },
    {
      field: 'name',
      headerName: 'Họ và tên',
      width: 130,
    },
    {
      headerName: "Học vị",
      field: "degree",
      width: 70,
      renderCell: (params) => {
        return params.row.degree;
      }
    },
    {
      headerName: "Lĩnh vực nghiên cứu",
      field: "research_area",
      width: 130,
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
        if (!value) return "Chưa cập nhật";
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
      width: 130,
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
            <Tooltip title={params.row.link_profile}>
              <Chip
                label="Chi tiết"
                component="a"
                href={params.row.link_profile}
                target={"_blank"}
                clickable
                onClick={(event) => event.stopPropagation()}
              />
            </Tooltip>
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
    },
    {
      headerName: "Vai trò",
      field: "role",
      renderCell: (params) => {
        return (
          <Chip
            variant={"filled"}
            label={roles.find(role => role.value === params.row.role)?.label}
            color={roles.find(role => role.value === params.row.role)?.color}
          />
        )
      }
    },
    {
      headerName: "Trạng thái",
      field: "contact_status",
      width: 130,
      renderCell: (params) => {
        return (
          <SelectStatus
            register={register}
            initStatus={params.row.contact_status}
            id={params.row._id}
          />
        )
      }
    }
  ];
}

export default function TableExpertsThesisDetail({
  thesis = null,
}) {
  const {id} = useParams();
  const [status, setStatus] = useState(thesis?.committees?.status ?? COMMITTEE_STATUSES.not_started.value);

  const [rows, setRows] = useState(thesis?.committees?.list?.map(item => {
    delete item?.expert?.id;
    return ({
      id: item.expert._id,
      ...item,
      ...item.expert
    })
  }) ?? []);
  const [rowSelectionModel, setRowSelectionModel] = useState([]);

  const {
    register,
    control,
    reset,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue
  } = useForm({
    mode: "onSubmit",
    reValidateMode: "onChange",
    resolver: undefined,
    criteriaMode: "firstError"
  })

  const onSubmit = async (data) => {

    const updateList = await Request.patch(`/theses/${id}/committees`, data);
    if (updateList?.status === 'error') {
      pushToast(updateList?.message, 'error');
    } else {
      pushToast("Cập nhật danh sách thành công!", 'success');
    }

    const updateStatus = await Request.patch(`/theses/${id}`, {
      committees: {
        status: data.status
      }
    });
    if (updateStatus?.status === 'error') {
      pushToast(updateStatus?.message, 'error');
    } else {
      pushToast("Cập nhật trạng thái thành công!", 'success');
    }

  }

  const onError = (errors, e) => console.log(errors, e);

  const handleChangeStatus = (event) => {
    setStatus(event.target.value);

    const res = Request.patch(`/theses/${id}`, {
      committees: {
        status: event.target.value
      }
    });

    if (res?.status === 'error') {
      pushToast(res?.message, 'error');
    } else {
      pushToast("Cập nhật trạng thái thành công!", 'success');
    }
  };

  const handleDelete = async () => {
    if (!rowSelectionModel.length) {
      pushToast("Vui lòng chọn ít nhất 1 chuyên gia để xoá!", 'error');
      return;
    }

    const res = await Request.del(`/theses/${id}/committees?ids=${rowSelectionModel.join(',')}`);

    if (res?.status === 'error') {
      pushToast(res?.message, 'error');
    } else {
      pushToast("Xoá thành công!", 'success');
      setRows(rows.filter(row => !rowSelectionModel.includes(row.id)));
    }
  }

  return (
    <>
      <form
        style={{
          height: 800,
          width: '100%'
        }}
        onSubmit={handleSubmit(onSubmit, onError)}
        id={"form-experts"}
      >
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            alignItems: 'center',
            marginBottom: 2,
            justifyContent: 'space-between'
          }}
        >
          <FormControl
            size={"small"}
            sx={{
              minWidth: "150px"
            }}
          >
            <InputLabel id="select-status">Trạng thái</InputLabel>
            <Select
              labelId="select-status"
              id="select-status-input"
              value={status}
              label="Trạng thái"
              inputProps={{
                ...register('status', {
                  onChange: handleChangeStatus
                })
              }}
            >
              {Object.values(COMMITTEE_STATUSES).map((item, index) => (
                <MenuItem key={index} value={item.value}>
                  <Chip
                    label={item.name}
                    color={item.color}
                    size={"small"}
                  />
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <Button
            variant={"contained"}
            color={"error"}
            onClick={handleDelete}
          >
            Xoá
          </Button>
        </Box>
        <DataGrid
          rows={rows}
          columns={columns({
            register: register
          })}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          rowSelectionModel={rowSelectionModel}
          onRowSelectionModelChange={(newRowSelectionModel) => {
            setRowSelectionModel(newRowSelectionModel);
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          getRowHeight={() => "auto"}
          slots={{
            toolbar: GridToolbar
          }}
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
      </form>
    </>
  )
}

function SelectStatus({
  initStatus = '',
  register = null,
  id = ''
}) {
  const {id: thesisId} = useParams();
  const [statusState, setStatusState] = useState(initStatus);

  const handleChangeStatus = async (event) => {
    setStatusState(event.target.value);

    const res = await Request.patch(`/theses/${thesisId}/committees`, {
      [id]: event.target.value
    });

    if (res?.status === 'error') {
      pushToast(res?.message, 'error');
    } else {
      pushToast("Cập nhật trạng thái thành công!", 'success');
    }
  }

  return (
    <FormControl
      // size={"small"}
      // sx={{
      //   minWidth: "150px"
      // }}
    >
      <Select
        id="select-action-input"
        value={statusState}
        displayEmpty
        disableUnderline
        variant={"standard"}
        sx={{
          "& .MuiSelect-select": {
            padding: 0,
            border: "none"
          },
          '.MuiOutlinedInput-notchedOutline': { border: 0 }
        }}
        inputProps={{
          ...register(id, {
            onChange: handleChangeStatus
          })
        }}
      >
        {CONTACT_STATUSES.map((item, index) => (
          <MenuItem key={index} value={item.value}>
            <Chip
              label={item.label}
              color={item.color}
              // size={"small"}
            />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

const CONTACT_STATUSES = [
  {
    label: 'Chưa liên hệ',
    value: 'not_contacted',
    color: 'default'
  },
  {
    label: 'Đã liên hệ',
    value: 'contacted',
    color: 'info'
  },
  {
    label: 'Đồng ý',
    value: 'accepted',
    color: 'success'
  },
  {
    label: 'Từ chối',
    value: 'declined',
    color: 'error'
  }
]

const roles = [
  { value: "", label: "Chọn", color: "default" },
  { value: "chair", label: "Chủ tịch", color: "success" },
  { value: "secretary", label: "Thư kí", color: "primary" },
  { value: "reviewer", label: "Phản biện", color: "warning" },
]

const COMMITTEE_STATUSES = {
  not_started: {
    name: 'Chưa bắt đầu',
    value: 'not_started',
    color: 'default',
  },
  waiting: {
    name: 'Đang tìm kiếm',
    value: 'waiting',
    color: 'warning',
  },
  done: {
    name: 'Đã chốt hội đồng',
    value: 'done',
    color: 'success',
  }
}