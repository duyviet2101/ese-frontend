import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useEffect, useState } from 'react';
import Request from '~/utils/request.js';
import { isEmpty } from 'lodash';
import Avatar from '@mui/material/Avatar';
import { Accordion, AccordionDetails, AccordionSummary, Chip, Tab, Tabs, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { ArrowDownward } from '@mui/icons-material';

export default function InfoExpertDrawer({
  id = ''
}) {
  const [open, setOpen] = useState(false);
  const [expert, setExpert] = useState({});

  const articles = {};
  if (expert?.articles?.length > 0) {
    expert?.articles?.map(article => {
      if (!articles[article.type]) {
        if (article.type === null) {
          article.type = 'Khác';
        }
        articles[article.type] = [];
      }
      articles[article.type].push(article);
    });
  }

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  useEffect(() => {
    if (open && isEmpty(expert)) {
      Request.get(`/experts/${id}`).then((response) => {
        setExpert(response);
      });
    }
  }, [open]);

  return (
    <div>
      <Chip
        label="Chi tiết"
        clickable
        onClick={(event) => {
          event.stopPropagation();
          toggleDrawer(true)();
        }}
      />
      <Drawer
        open={open}
        onClose={toggleDrawer(false)}
        anchor={"right"}
      >
        <Box
          sx={{
            width: "80vw",
            maxWidth: 800,
            padding: 3,
          }}
          role="presentation"
          // onClick={toggleDrawer(false)}
          // onKeyDown={toggleDrawer(false)}
        >
          <Box
            sx={{
              display: 'flex',
              gap: 3,
            }}
          >
            <Avatar
              src={"https://qldt.neu.edu.vn/QuanLyLLKH/Upload/Avatar/" + expert?.img}
              variant={"rounded"}
              sx={{
                width: 200,
                height: 200,
              }}
            />
            <Box>
              <Typography variant={"h5"} gutterBottom fontWeight={600}>{`${expert?.degree} ${expert?.name}`}</Typography>
              <Typography variant={"body1"} fontWeight={500} fontStyle={"italic"}>{`${expert?.position}, ${expert?.company}`}</Typography>
              <Divider sx={{marginY: 2}} />
              <Box
                sx={{
                  display: 'flex',
                  gap: 2,
                  alignItems: 'center',
                }}
              >
                <Typography variant={"body1"}>Thông tin liên hệ:</Typography>
                <Chip label={expert?.email} color={"primary"} variant={"outlined"} />
                <Chip label={expert?.phone} color={"primary"} variant={"outlined"} />
              </Box>
              {expert?.research_area?.length > 0 && <Box
                sx={{
                  display: 'flex',
                  gap: 2,
                  alignItems: 'center',
                  marginTop: 2
                }}
              >
                <Typography variant={'body1'}>Lĩnh vực nghiên cứu:</Typography>
                {expert?.research_area?.map((area, index) => (
                  <Chip
                    key={index}
                    label={area?.name}
                    color={'primary'}
                    variant={'outlined'}
                    sx={{
                      marginRight: 0.5,
                      marginBottom: 0.5
                    }}
                  />
                ))}
              </Box>}
            </Box>
          </Box>
          <Box sx={{ width: '100%', marginTop: 2 }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="Thông tin cá nhân" {...a11yProps(0)} />
                <Tab label={`Bài báo khoa học (${expert?.articles?.length || 0})`} {...a11yProps(1)} />
                <Tab label={`Đề tài nghiên cứu (${expert?.researches?.length || 0})`} {...a11yProps(2)} />
                <Tab label={`Sách đã viết (${expert?.book_written?.length || 0})`} {...a11yProps(3)} />
              </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
              <Box
                sx={{
                  display: 'flex',
                  gap: 1,
                  flexDirection: 'column',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    gap: 1,
                    width: '100%',
                  }}
                >
                  <Typography flexBasis={"20%"} variant={"body1"} fontWeight={700}>Họ và tên:</Typography>
                  <Typography flexBasis={"80%"} variant={"body1"}>{expert?.name}</Typography>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    gap: 1,
                    width: '100%',
                  }}
                >
                  <Typography flexBasis={"20%"} variant={"body1"} fontWeight={700}>Giới tính:</Typography>
                  <Typography flexBasis={"80%"} variant={"body1"}>{expert?.gender === 1 ? "Nam" : "Nữ"}</Typography>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    gap: 1,
                    width: '100%',
                  }}
                >
                  <Typography flexBasis={"20%"} variant={"body1"} fontWeight={700}>Năm sinh:</Typography>
                  <Typography flexBasis={"80%"} variant={"body1"}>{expert?.birth?.replace('//', '')}</Typography>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    gap: 1,
                    width: '100%',
                  }}
                >
                  <Typography flexBasis={"20%"} variant={"body1"} fontWeight={700}>Địa chỉ:</Typography>
                  <Typography flexBasis={"80%"} variant={"body1"}>{expert?.address}</Typography>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    gap: 1,
                    width: '100%',
                  }}
                >
                  <Typography flexBasis={"20%"} variant={"body1"} fontWeight={700}>Học vị:</Typography>
                  <Typography flexBasis={"80%"} variant={"body1"}>{expert?.degree}</Typography>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    gap: 1,
                    width: '100%',
                  }}
                >
                  <Typography flexBasis={"20%"} variant={"body1"} fontWeight={700}>Chức vụ và đơn vị công tác (hiện tại/trước khi nghỉ hưu):</Typography>
                  <Typography flexBasis={"80%"} variant={"body1"}>{`${expert?.position}, ${expert?.company}`}</Typography>
                </Box>
                <Chip
                  label="Xem thêm"
                  component="a"
                  href={expert?.link_profile}
                  target={"_blank"}
                  clickable
                  sx={{
                    width: 'fit-content',
                  }}
                />
              </Box>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <Box>
                {!isEmpty(articles) ? (<List>
                  {Object.keys(articles).map((type, index) => (
                    <Accordion key={index} defaultExpanded={true}>
                      <AccordionSummary
                        expandIcon={<ArrowDownward />}
                        aria-controls={`panel${index}a-content`}
                        id={`panel${index}a-header`}
                      >
                        <Typography variant={'body1'}
                                    fontWeight={600}>{`${type} (${articles[type].length})`}</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <List>
                          {articles[type].map((article, index) => (
                            <div key={index}>
                              <ListItem>
                                <ListItemText
                                  primary={`${article?.title}, ${article?.published_in}, ${article?.year ? `${article?.year}` : ''} (${article?.role})`}
                                />
                              </ListItem>
                              <Divider />
                            </div>
                          ))}
                        </List>
                      </AccordionDetails>
                    </Accordion>
                  ))}
                </List>) : (
                  <ListItem>
                    <ListItemText
                      primary={"Chưa cập nhật"}
                    />
                  </ListItem>
                )}
              </Box>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
              <Box>
                <List>
                  {expert?.researches?.length > 0 ? expert?.researches?.map((project, index) => (
                    <div key={index}>
                      <ListItem>
                        <ListItemText
                          primary={`${project?.title}, ${project?.level}, ${project?.year ? ` ${project?.year}` : ''} (${project?.role})`}
                        />
                      </ListItem>
                      <Divider />
                    </div>
                  )): (
                    <ListItem>
                      <ListItemText
                        primary={"Chưa cập nhật"}
                      />
                    </ListItem>
                  )}
                </List>
              </Box>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
              <Box>
                <List>
                  {expert?.book_written?.length > 0 ? expert?.book_written?.map((book, index) => (
                    <div key={index}>
                      <ListItem>
                        <ListItemText
                          primary={`${book?.title} ${book?.year ? `- ${book?.year}` : ''} (${book?.role})`}
                        />
                      </ListItem>
                      <Divider />
                    </div>
                  )) : (
                    <ListItem>
                      <ListItemText
                        primary={"Chưa cập nhật"}
                      />
                    </ListItem>
                  )}
                </List>
              </Box>
            </CustomTabPanel>
          </Box>
        </Box>
      </Drawer>
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}