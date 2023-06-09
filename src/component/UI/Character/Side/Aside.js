import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

import { Head } from '../../Home/RightAside/CommonContentBox';
import { Content } from '../../Home/RightAside/CommonContentBoxMain';

import { useEffect, useState, Fragment } from 'react';
import { useParams } from 'react-router-dom';

import collect1 from '../../../../asset/icon/collect1.png';
import collect2 from '../../../../asset/icon/collect2.png';
import collect3 from '../../../../asset/icon/collect3.png';
import collect4 from '../../../../asset/icon/collect4.png';
import collect5 from '../../../../asset/icon/collect5.png';
import collect6 from '../../../../asset/icon/collect6.png';
import collect7 from '../../../../asset/icon/collect7.png';
import collect8 from '../../../../asset/icon/collect8.png';
import collect9 from '../../../../asset/icon/collect9.png';

const Nickname = styled.div`
  width: 100%;
  height: 59px;
  background: #292e33;
  margin: 65px 0px 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  color: white;

  p {
    margin-left: 20px;
    font-size: 20px;
    font-family: 'Nanum Gothic';
  }
`;

const Side = styled.aside`
  width: 283px;
  height: auto;
  display: flex;
  background: #1e2225;
  flex-direction: column;
  justify-content: space-between;
  float: left;

  @media ${(props) => props.theme.mobile} {
    width: 100%;
  }
`;

const Wrap = styled.div`
  height: auto;

  @media ${(props) => props.theme.mobile} {
    width: 95%;
    margin: 0 10px;
  }
`;

const Wrap2 = styled.div`
  @media ${(props) => props.theme.mobile} {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

const FullWrap = styled.div`
  @media ${(props) => props.theme.mobile} {
    display: flex;
    justify-content: center;
  }
`;

const CharacterInfo = styled.div`
  width: 100%;
  height: auto;
  background: #292e33;
  border-radius: 10px;
  margin-bottom: 25px;
  padding: 10px 0;

  @media ${(props) => props.theme.mobile} {
    width: 95vw;
    margin-right: 20px;
    margin-left: 20px;
  }
`;

const AvatarImg = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 50px;

  @media ${(props) => props.theme.mobile} {
    width: 100%;
    margin-left: 0px;
    padding-top: 20px;
  }
`;

const InfoItem = styled.div`
  width: 100%;
  height: 29px;
  display: flex;
  align-items: center;
  padding: 2px 0;

  @media ${(props) => props.theme.mobile} {
    height: 50px;
  }

  div {
    background: #40444f;
    color: #c1c1c1;
    width: 65px;
    border-radius: 10px;
    text-align: center;
    margin: 0 10px 0 20px;
    font-size: 14px;
  }

  p {
    color: white;
    font-family: 'Nanum Gothic Light';
    font-size: 14px;
  }
`;

const CollectWrap = styled.div`
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 2px 13px 1px 13px;

  @media ${(props) => props.theme.mobile} {
    margin: 0 13px 0;
    padding: 10px 0;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  img {
    width: 20px;
    height: 20px;
    object-fit: cover;
  }

  p {
    width: auto;
    font-size: 12px;
    margin-top: 8px;
  }
`;
const lostArkKey =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyIsImtpZCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyJ9.eyJpc3MiOiJodHRwczovL2x1ZHkuZ2FtZS5vbnN0b3ZlLmNvbSIsImF1ZCI6Imh0dHBzOi8vbHVkeS5nYW1lLm9uc3RvdmUuY29tL3Jlc291cmNlcyIsImNsaWVudF9pZCI6IjEwMDAwMDAwMDAwMjc0MTYifQ.MIy7jDe9w81yjIX8Zh4VgGCVH2IR-vz7CGF6Ceh0zdc-5HfnY31XrIwJ86r_nz1ImkS-dPxW7bO_8AaZmuII6sbdJo_dWer-kbkpA5kx1aIrtGqpvhY_fWtXY-_wmWhZrdAFJTtB8t6yVHIua_ceA7CJWM0Bn1sQ6SNWxCbq9fsHb6BGRayKuJ5JV-qAIVC5VjNyVC4iIyAdJetDWgu0c7DTR_pVOeWHbsX-CbAqqKXvRPoNII1aop4Ioa9Sbhb99iD-BuA7pfn-_D-m6axvO0-0luLu4UbwXhrE5jEVPNs7Oxf215AqosVjFb5ObX74iGzf6vyt8YqjL08UkLS8NQ';

const collectImg = [
  collect1,
  collect2,
  collect3,
  collect4,
  collect5,
  collect6,
  collect7,
  collect8,
  collect9,
];

const Aside = () => {
  const [isExist, setIsExist] = useState();
  const [profile, setProfile] = useState(); // 기본 스탯
  const [collectibles, setCollectibles] = useState(); // 수집품

  const { id } = useParams();
  const commonCharacterUrl = `https://developer-lostark.game.onstove.com/armories/characters`;
  const loadCharacterUrl = `https://developer-lostark.game.onstove.com/characters`;

  useEffect(() => {
    // 캐릭터 존재 여부(원정대 캐릭터)
    const loadCharacterTrue = async () => {
      try {
        const response = await fetch(`${loadCharacterUrl}/${id}/siblings`, {
          headers: {
            'Content-Type': 'application/json',
            authorization: `bearer ${lostArkKey}`,
          },
        });
        const responseData = await response.json();

        if (responseData) {
          setIsExist(true);
        } else {
          setIsExist(false);
        }
      } catch (err) {
        console.log('LostArk Character True of False error!!');
      }
    };

    const loadProfile = async () => {
      try {
        const response = await fetch(`${commonCharacterUrl}/${id}/profiles`, {
          headers: {
            'Content-Type': 'application/json',
            authorization: `bearer ${lostArkKey}`,
          },
        });
        const responseData = await response.json();

        setProfile(responseData);
      } catch (err) {
        console.log('LostArk Profile error!!');
      }
    };

    const loadCollectibles = async () => {
      try {
        const response = await fetch(
          `${commonCharacterUrl}/${id}/collectibles`,
          {
            headers: {
              'Content-Type': 'application/json',
              authorization: `bearer ${lostArkKey}`,
            },
          }
        );
        const responseData = await response.json();

        setCollectibles(responseData);
      } catch (err) {
        console.log('LostArk Collectibles error!!');
      }
    };

    loadCharacterTrue();
    loadProfile();
    loadCollectibles();
  }, [loadCharacterUrl, isExist, commonCharacterUrl, id]);

  const isPc = useMediaQuery({
    query: '(min-width:1024px)',
  });
  const isTablet = useMediaQuery({
    query: '(min-width:768px) and (max-width:1023px)',
  });
  const isMobile = useMediaQuery({
    query: '(max-width:767px)',
  });

  const infoItem = profile && (
    <CharacterInfo>
      <InfoItem>
        <div>서버</div>
        <p>{profile.ServerName}</p>
      </InfoItem>
      <InfoItem>
        <div>길드</div>
        <p>{profile.GuildName === null ? '-' : profile.GuildName}</p>
      </InfoItem>
      <InfoItem>
        <div>클래스</div>
        <p>{profile.CharacterClassName}</p>
      </InfoItem>
      <InfoItem>
        <div>칭호</div>
        <p>{profile.Title === null ? '-' : profile.Title}</p>
      </InfoItem>
      <InfoItem>
        <div>전투</div>
        <p>{profile.CharacterLevel}</p>
      </InfoItem>
      <InfoItem>
        <div>아이템</div>
        <p>{profile.ItemMaxLevel}</p>
      </InfoItem>
      <InfoItem>
        <div>원정대</div>
        <p>{profile.ExpeditionLevel}</p>
      </InfoItem>
      <InfoItem>
        <div>PVP</div>
        <p>{profile.PvpGradeName}</p>
      </InfoItem>
      <InfoItem>
        <div>영지</div>
        <p>{profile.TownName === null ? '-' : profile.TownName}</p>
      </InfoItem>
    </CharacterInfo>
  );

  const collectList =
    collectibles &&
    collectibles.map((item, index) => (
      <CollectWrap key={index}>
        <div>
          <img src={collectImg[index]} alt="이그네아" />
          <p>{item.Point}</p>
        </div>
      </CollectWrap>
    ));

  const collectItem = collectibles && (
    <Fragment>
      <Head collect="true" rank="true">
        수집품
      </Head>
      <Content collect="true" border="true">
        <CollectWrap>{collectList}</CollectWrap>
      </Content>
    </Fragment>
  );

  const avatarImage = profile && (
    <Content collectImg="true" collect="true">
      <AvatarImg src={profile.CharacterImage} alt="아바타" />
    </Content>
  );

  return (
    <FullWrap>
      {isPc && (
        <Wrap>
          <Nickname>
            <p>{id}</p>
          </Nickname>
          <Side>
            {infoItem}
            {collectItem}
            {avatarImage}
          </Side>
        </Wrap>
      )}
      {isTablet && (
        <Wrap>
          <Nickname>
            <p>{id}</p>
          </Nickname>
          <Side>
            {infoItem}
            {collectItem}
            {avatarImage}
          </Side>
        </Wrap>
      )}
      {isMobile && (
        <Wrap>
          <Nickname>
            <p>{id}</p>
          </Nickname>
          <Side>
            <Wrap2>
              <div>{infoItem}</div>
              <div>{avatarImage}</div>
            </Wrap2>
            <Wrap>{collectItem}</Wrap>
          </Side>
        </Wrap>
      )}
    </FullWrap>
  );
};

export default Aside;
