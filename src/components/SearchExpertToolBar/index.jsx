import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import {
  Chip,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput, Select,
  SvgIcon,
  useTheme
} from '@mui/material';
import { BiSearchAlt } from 'react-icons/bi';
import { useEffect, useRef, useState } from 'react';
import Request from '~/utils/request.js';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useForm } from 'react-hook-form';
import MenuItem from '@mui/material/MenuItem';
import { useSearchParams } from 'react-router-dom';
import pushToast from '~/helpers/sonnerToast.js';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      // width: 250,
    },
  },
};
function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export function SelectTopics({
  // size = 1000,
  // start = 0,
  topics = [],
  register = null,
  defaultValues = null
}) {
  const theme = useTheme();
  defaultValues = defaultValues?.split(',')?.filter(item => item) || [];
  const [select, setSelect] = useState(defaultValues);
  if (Array.isArray(defaultValues)) {
    defaultValues?.map((item) => {
      if (!topics.find((topic) => topic.key === item)) {
        topics.push({
          key: item,
          doc_count: 0
        });
      }
    })
  }

  useEffect(() => {
    if (topics.length === 0 && defaultValues.length === 0) {
      setSelect([]);
    }
  }, [topics]);

  const handleChange = (e) => {
    const {
      target: { value }
    } = e;
    const items = typeof value === "string" ? value.split(",") : value;
    setSelect(items);
  }

  return (
    <>
      <FormControl
        sx={{ width: "30%" }}
        size={"small"}
      >
        <InputLabel id="select-topics-chip">Chủ đề</InputLabel>
        <Select
          id={"select-topics-chip"}
          multiple
          autoWidth={true}
          input={<OutlinedInput label="Chủ đề" />}
          renderValue={(selected) => {
            return (
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} color={"primary"} />
                ))}
              </Box>
            )
          }}
          value={select}
          {...(register ? register("research_area", {
            onChange: handleChange
          }) : {})}
          MenuProps={MenuProps}
        >
          {topics.map((item) => (
            <MenuItem key={item.key} value={item.key} style={getStyles(item.key, select, theme)}>
              {item.key + '(' + item.doc_count + ')'}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
}

export function SelectDegree({
  register = null,
  degrees = [],
  defaultValues = null
}) {
  const theme = useTheme();
  defaultValues = defaultValues?.split(',')?.filter(item => item) || [];
  const [select, setSelect] = useState(defaultValues);
  if (Array.isArray(defaultValues)) {
    defaultValues?.map((item) => {
      if (!degrees.find((degree) => degree.key === item)) {
        degrees.push({
          key: item,
          doc_count: 0
        });
      }
    })
  }

  useEffect(() => {
    if (degrees.length === 0 && defaultValues.length === 0) {
      setSelect([]);
    }
  }, [degrees]);

  const handleChange = (e) => {
    const {
      target: { value }
    } = e;
    const items = typeof value === "string" ? value.split(",") : value;
    setSelect(items);
  }

  return (
    <>
      <FormControl
        sx={{ width: "30%" }}
        size={"small"}
      >
        <InputLabel id="select-degrees-chip">Học vị</InputLabel>
        <Select
          id={"select-degrees-chip"}
          multiple
          autoWidth={true}
          input={<OutlinedInput label="Học vị" />}
          renderValue={(selected) => {
            return (
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} color={"primary"} />
                ))}
              </Box>
            )
          }}
          MenuProps={MenuProps}
          value={select}
          {...register("degree", {
            onChange: handleChange
          })}
        >
          {degrees.map((item) => (
            <MenuItem key={item.key} value={item.key} style={getStyles(item.key, select, theme)}>
              {item.key + '(' + item.doc_count + ')'}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  )
}

export function SelectCompany({
  companies = [],
  register = null,
  defaultValues = null
}) {
  const theme = useTheme();
  defaultValues = defaultValues?.split(',')?.filter(item => item) || [];
  const [select, setSelect] = useState(defaultValues);
  if (Array.isArray(defaultValues)) {
    defaultValues?.map((item) => {
      if (!companies.find((company) => company.key === item)) {
        companies.push({
          key: item,
          doc_count: 0
        });
      }
    })
  }

  useEffect(() => {
    if (companies.length === 0 && defaultValues.length === 0) {
      setSelect([]);
    }
  }, [companies]);

  const handleChange = (e) => {
    const {
      target: { value }
    } = e;
    const items = typeof value === "string" ? value.split(",") : value;
    setSelect(items);
  }

  return (
    <>
      <FormControl
        sx={{ width: "30%" }}
        size={"small"}
      >
        <InputLabel id="select-companies-chip">Đơn vị công tác</InputLabel>
        <Select
          id={"select-companies-chip"}
          multiple
          autoWidth={true}
          input={<OutlinedInput label="Đơn vị công tác" />}
          renderValue={(selected) => {
            return (
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} color={"primary"} />
                ))}
              </Box>
            )
          }}
          MenuProps={MenuProps}
          value={select}
          {...register("company", {
            onChange: handleChange
          })}
        >
          {companies.map((item) => (
            <MenuItem key={item.key} value={item.key} style={getStyles(item.key, select, theme)}>
              {item.key + '(' + item.doc_count + ')'}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  )
}

export function SearchBoxWhat({
  q = '',
  size = 10,
  start = 0,
  register = null,
  defaultValue = ''
}) {
  const [searchValue, setSearchValue] = useState(q);
  const [suggestions, setSuggestions] = useState([]);
  const timeoutRef = useRef(null);

  const getData = async ({searchValue, size, start}) => {
    const res = await Request.get(`/experts/suggestions?q=${searchValue}&size=${size}&start=${start}`);
    setSuggestions(res);
  }

  useEffect(() => {
    getData({searchValue, size, start});
  }, [searchValue, size, start]);

  const handleSearch = (e) => {
    clearTimeout(timeoutRef.current);
    const value = e.target.value;
    timeoutRef.current = setTimeout(() => {
      setSearchValue(value);
    }, 300);
    // setSearchValue(e?.target?.value);
  }

  return (
    <>
      <Autocomplete
        freeSolo
        size={"small"}
        disableClearable
        options={suggestions.map((option) => option.name)}
        value={searchValue}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Tìm kiếm theo tên, chủ đề,..."
            value={searchValue}
            InputProps={{
              ...params.InputProps,
              type: 'search',
              placeholder: "Nhập từ khoá, cách nhau bằng dấu phẩy...",
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
            {...register("what", {
              onChange: handleSearch,
              value: searchValue
            })}
          />
        )}
        sx={{
          width: "45%"
        }}
      />
    </>
  );
}

export function SearchBoxWhere({
  q = '',
  size = 10,
  start = 0,
  register = null
}) {
  const [searchValue, setSearchValue] = useState(q);
  const [suggestions, setSuggestions] = useState([]);
  const timeoutRef = useRef(null);

  const getData = async ({searchValue, size, start}) => {
    const res = await Request.get(`/experts/suggestions?q=${searchValue}&size=${size}&start=${start}&type=where`);
    setSuggestions(res);
  }

  useEffect(() => {
    getData({searchValue, size, start});
  }, [searchValue, size, start]);

  const handleSearch = (e) => {
    clearTimeout(timeoutRef.current);
    const value = e.target.value;
    timeoutRef.current = setTimeout(() => {
      setSearchValue(value);
    }, 300);
    // setSearchValue(e?.target?.value);
  }

  return (
    <>
      <Autocomplete
        freeSolo
        size={"small"}
        disableClearable
        options={suggestions.map((option) => option.name)}
        value={searchValue}
        renderInput={(params) => (
          <TextField
            {...params}
            value={searchValue}
            label="Tìm kiếm theo đơn vị công tác, địa chỉ..."
            InputProps={{
              ...params.InputProps,
              type: 'search',
              placeholder: "Nhập đơn vị công tác, địa chỉ...",
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
            {...register("where", {
              onChange: handleSearch,
              value: searchValue
            })}
          />
        )}
        sx={{
          width: "45%"
        }}
      />
    </>
  );
}

export default function SearchToolBar({
  setRows = () => {},
  setPageInfo = () => {},
  pageSize = 5,
  paginationModel = {}
}) {
  const [topics, setTopics] = useState([]);
  const [degrees, setDegrees] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams(
    new URLSearchParams(location.search + '&facets=research_area:20,degree:20,company:20')
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    reValidateMode: "onChange",
    resolver: undefined,
    criteriaMode: "firstError"
  })

  const onSubmit = async (data) => {
    let {
      what,
      where,
      research_area,
      degree,
      company,
    } = data;
    // console.log(research_area, degree, company);

    if (degree) {
      degree = typeof degree === 'string' ? degree : degree?.join(",");
    }

    if (company) {
      company = typeof company === 'string' ? company : company?.join(",");
    }

    if (research_area) {
      research_area = typeof research_area === 'string' ? research_area : research_area?.join(",");
    }

    searchParams.set('what', what || '');
    searchParams.set('where', where || '');
    searchParams.set('research_area', research_area || '');
    searchParams.set('degree', degree || '');
    searchParams.set('company', company || '');
    searchParams.set('facets', 'research_area:20,degree:20,company:20');
    // console.log(params.toString());
    setSearchParams(searchParams);
  }

  const onError = (errors, e) => {
    Object.values(errors).reverse().forEach((error) => {
      console.log(error.message);
      pushToast(error.message, 'error');
    });
  }

  const onReset = () => {
    setTopics([]);
    setDegrees([]);
    setCompanies([]);
    reset({
      what: searchParams.get('what') || '',
      where: searchParams.get('where') || '',
      research_area: '',
      degree: '',
      company: '',
    });

    searchParams.delete('research_area');
    searchParams.delete('degree');
    searchParams.delete('company');

    setSearchParams(searchParams);
    // setRows([]);
  }

  useEffect(() => {
    const fetchData = async () => {
      const res = await Request.get(`/experts/search?${searchParams.toString()}&start=${(paginationModel.page * paginationModel.pageSize) || 0}&size=${paginationModel?.pageSize || pageSize}`);
      // console.log(res);
      setRows(res.items);
      setTopics(res.facets?.research_area?.buckets || []);
      setDegrees(res.facets?.degree?.buckets || []);
      setCompanies(res.facets?.company?.buckets || []);
      setPageInfo({
        totalRowCount: res.total.value,
      })
    }
    fetchData();
  }, [searchParams, paginationModel]);
  // console.log(paginationModel)

  return (
    <Box
      sx={{
        display: 'flex',
        gap: 1,
        flexWrap: "wrap"
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
        component={"form"}
        onSubmit={handleSubmit(onSubmit, onError)}
        noValidate={true}
      >
        <SearchBoxWhat q={searchParams.get('what')} register={register} />
        <SearchBoxWhere q={searchParams.get('where')} register={register}/>
        <Button
          variant="contained"
          type={"submit"}
          sx={{
            textWrap: "none",
            whiteSpace: "nowrap",
            height: "100%",
            backgroundColor: "rgb(0,128,255)",
            "&:hover": {
              backgroundColor: "rgb(0,128,255)",
            }
          }}
        >
          Tìm kiếm
        </Button>
      </Box>
      <Box
        sx={{
          display: 'flex',
          gap: 1,
          flexBasis: "100%"
        }}
      >
        <SelectTopics defaultValues={searchParams.get('research_area')} topics={topics} register={register}/>
        <SelectDegree defaultValues={searchParams.get('degree')} degrees={degrees} register={register}/>
        <SelectCompany defaultValues={searchParams.get('company')} companies={companies} register={register}/>
        <Button
          sx={{
            textWrap: "none",
            whiteSpace: "nowrap",
            height: "100%",
            paddingX: "10px"
          }}
          onClick={onReset}
          variant={"outlined"}
        >
          Xoá bộ lọc
        </Button>
      </Box>
    </Box>
  )
}