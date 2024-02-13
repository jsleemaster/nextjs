"use client";

import { Grid, Typography, Card } from "@mui/material";
import Image from "next/image";

import GridBox from "components/GridBox";
import useInit from "hooks/useInit";

import { Container, ProfileBox } from "./style";

const cerfication = [
  {
    subtitle: "2019.02",
    name: "축산기사",
  },
  {
    subtitle: "2011.10",
    name: "정보처리기능사",
  },
  {
    subtitle: "2011.10",
    name: "정보기술자격(ITQ)한글엑셀 A",
  },
  {
    subtitle: "2010.10",
    name: "컴퓨터활용능력 2급",
  },
  {
    subtitle: "2011.05",
    name: "워드프로세서 1급",
  },
].sort(
  (a, b) => new Date(b.subtitle).valueOf() - new Date(a.subtitle).valueOf()
);
const education = [
  {
    subtitle: "2020.02",
    name: "중부대학교 애완동물 자원학과 졸업",
  },
].sort(
  (a, b) => new Date(b.subtitle).valueOf() - new Date(a.subtitle).valueOf()
);
const technology = [
  {
    subtitle: "FrontEnd",
    name: "Javascript, Typescript, Vue, Vuex, Nuxt, ReactNative",
  },
  {
    subtitle: "Backend",
    name: "Express, Node.js, Koa, Mysql, pm2",
  },
  {
    subtitle: "ETC",
    name: `Git, Nginx, AWS(EC2, RDS), Scss, TailwindCss, Bootstrap Vue,
    Day.js, Fullcalendar.js, Swiper, SweetAlert, Passport.js, Pinia,
    Stitches.js, StyledComponents, Mui`,
  },
];
const career = [
  {
    subtitle: "2021. 08 ~ 2023. 11",
    name: "디벨로퍼그룹",
  },
  {
    subtitle: "2021. 03 ~ 2021. 07",
    name: "리틀루트",
  },
];
const introduce = [
  {
    subtitle: "Name",
    name: "이순명",
  },
  {
    subtitle: "Birth",
    name: "1994. 12. 24",
  },
  {
    subtitle: "Hp",
    name: "010-2934-4579",
  },
  {
    subtitle: "Email",
    name: "jsleemaster@gmail.com",
    type: "email",
  },
  {
    subtitle: "Blog",
    name: "https://velog.io/@jsleemaster",
    type: "email",
  },
  {
    subtitle: "Github",
    name: "https://github.com/jsleemaster",
    type: "email",
  },
];
const jsLeeBox = [
  { title: "Introduce", sort: 1, item: introduce },
  { title: "Career", sort: 2, item: career },
  { title: "Education", sort: 4, item: education },
  { title: "Technology", sort: 3, item: technology },
  { title: "Certification", sort: 5, item: cerfication },
].sort((a, b) => a.sort - b.sort);

const Jslee = () => {
  const mounted = useInit();

  return (
    mounted && (
      <Container>
        <Card
          sx={{
            padding: 1,
            display: "flex",
            backgroundColor: "#eaeaea",
            color: "#202020",
          }}
          component={"section"}
        >
          <Grid
            display={"flex"}
            flexDirection="column"
            sx={{
              marginX: 18,

              flex: 1,
            }}
            component={"section"}
          >
            <Grid
              component={"article"}
              sx={{
                marginTop: 10,
                position: "relative",
                minHeight: 100,
                minWidth: 100,
                width: 180,
                height: 180,
                border: "1px solid #000",
                borderRadius: "100%",
                overflow: "hidden",
                display: "flex",
                justifyContent: "center",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <Image
                src={"/images/jslee.png"}
                alt="profile"
                fill={true}
                style={{
                  objectFit: "cover",
                  width: "100%",
                }}
              />
            </Grid>
            <Typography variant="h5" sx={{ marginY: 2, wordBreak: "keep-all" }}>
              좋은 설계와 코드를 지향하는 <b>이순명입니다!</b>
            </Typography>
            <Grid
              component={"article"}
              sx={{
                display: "flex",
                width: "100%",
                borderRadius: "3px",
                height: "auto",
              }}
            >
              <Grid>
                <Typography variant="h6">저는 [ _ _ _ _ _ _ _ _ _ ]</Typography>
                <Typography variant="subtitle2" sx={{ wordBreak: "keep-all" }}>
                  사용자를 고려하여 UI/UX를 만드는{" "}
                </Typography>
                <Typography variant="subtitle2" sx={{ wordBreak: "keep-all" }}>
                  동료들과의 협력을 우선시하는{" "}
                </Typography>
                <Typography variant="subtitle2" sx={{ wordBreak: "keep-all" }}>
                  재사용성이 높은 컴포넌트를 만드는
                </Typography>
                <br />
                <Typography variant="h6" sx={{ wordBreak: "keep-all" }}>
                  개발자가 되고자 합니다.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gridTemplateRows: "1fr 1fr 1fr",
              gridAutoFlow: "column",
              height: "100%",
              gridGap: 10,
            }}
            component={"section"}
          >
            {jsLeeBox.map((jslee, idx) => {
              return (
                <GridBox title={jslee.title} key={idx}>
                  {jslee.item.map((intro, idx) => (
                    <ProfileBox key={idx} profile={intro} />
                  ))}
                </GridBox>
              );
            })}
          </Grid>
        </Card>
      </Container>
    )
  );
};

export default Jslee;
