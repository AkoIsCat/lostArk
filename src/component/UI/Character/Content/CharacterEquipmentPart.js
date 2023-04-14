import React, { Fragment, useState } from 'react';

import styled from 'styled-components';

import { BsDot } from 'react-icons/bs';

const EquipmentWrap = styled.div`
  width: auto;
  height: auto;
  background: #181c1e;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 30px 0 10px 0;

  .image {
    width: 75%;
    height: 75%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 30px 0;
    border-radius: 10px;

    img {
      width: 100%;
      height: 100%;
      border-radius: 10px;
      object-fit: contain;
    }
  }
`;

const TrueInner = styled.div`
  min-width: 200px;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  margin: 0 40px;
  justify-content: space-between;
  position: relative;
  height: auto;

  div {
    display: flex;
    margin-bottom: 13px;

    .desc {
      display: flex;
      flex-direction: column;
      font-family: 'Nanum Gothic';

      .type {
        font-size: 15px;
        color: #fff;
        margin: 5px;
      }

      .name {
        color: #fff;
        margin: 5px;
      }
    }
  }
`;

const FalseInner = styled.div`
  width: 270px;
  display: flex;
  flex-direction: column;
  margin: 0 40px;
  position: relative;

  div {
    display: flex;
    margin-bottom: 10px;

    .desc {
      display: flex;
      flex-direction: column;
      font-family: 'Nanum Gothic';

      .type {
        color: #fff;
        margin: 5px;
      }

      .name {
        color: #fff;
        margin: 5px;
      }

      div {
        margin: 0;
        color: #fff;
        height: 20px;
      }
    }
  }
`;

const ImageBox = styled.div`
  width: 55px;
  height: 55px;
  border-radius: 10px;
  background: #292e33;

  img {
    border-radius: 10px;
    object-fit: contain;
  }
`;

const ImageBoxColor = styled.div`
  width: 100%;
  height: 100%;
  background: ${(props) =>
    props.exist === '전설'
      ? 'linear-gradient(135deg, #362003 0%, #9e5f04 100%)'
      : props.exist === '영웅'
      ? 'linear-gradient(135deg, #261331 0%, #480d5d 100%)'
      : props.exist === '희귀'
      ? 'linear-gradient(135deg, #111f2c 0%, #113d5d 100%)'
      : props.exist === '고대'
      ? 'linear-gradient(135deg, #3d3325 0%, #dcc999 100%)'
      : props.exist === '유물'
      ? 'linear-gradient(135deg, #341a09 0%, #a24006 100%)'
      : '#292e33'};
  border-radius: 10px;
`;

const FlexWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
`;

const PercentBar = styled.div`
  width: 190px;
  height: 20px;
  margin: 0 5px;
  display: flex;

  p {
    width: 40px;
    color: ${(props) =>
      props.quality === 0
        ? '#fff'
        : props.quality > 0 && props.quality < 11
        ? '#ff0000'
        : props.quality < 30
        ? '#ffd200'
        : props.quality >= 30 && props.quality < 70
        ? '#91fe02'
        : props.quality >= 70 && props.quality < 90
        ? '#00b5ff'
        : props.quality >= 90 && props.quality < 100
        ? '#ce43fc'
        : '#fe9600'};
    margin: 2px 5px;
    text-align: center;
  }

  div {
    width: 100%;
    height: 20px;
    background: #292e33;
    border-radius: 10px;

    div {
      width: ${(props) => props.quality}%;
      background: ${(props) =>
        props.quality === 0
          ? '#fff'
          : props.quality > 0 && props.quality < 11
          ? '#ff0000'
          : props.quality > 10 && props.quality < 30
          ? '#ffd200'
          : props.quality >= 30 && props.quality < 70
          ? '#91fe02'
          : props.quality >= 70 && props.quality < 90
          ? '#00b5ff'
          : props.quality >= 90 && props.quality < 100
          ? '#ce43fc'
          : '#fe9600'};
    }
  }
`;

const MountedEngraving = styled.div`
  display: flex;
  align-items: center;
  width: auto;

  img {
    border-radius: 50%;
    width: 50px;
    height: 50px;
    object-fit: cover;
    margin-right: 5px;
  }

  div {
    width: auto;
    margin: 0 15px 0 0;
    display: flex;
    flex-direction: column;

    p {
      font-size: 15px;
      margin: 0 0px 5px 5px;
      font-family: 'Nanum Gothic';
      color: #fff;
    }

    .name {
      color: ${(props) =>
        props.grade === '+12'
          ? '#fe9600'
          : props.grade === ' +9'
          ? '#9e24ca'
          : props.grade === ' +6'
          ? '#113d5d'
          : props.grade === ' +3'
          ? '#46812d'
          : ''};
    }
  }
`;

const EquipmentTooltipWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: absolute;
  background-color: rgb(41, 46, 51, 1);
  border-radius: 10px;
  width: 240px;
  height: 90%;
  top: 0;
  left: 21.5%;
  right: 0;
  bottom: 0;
  color: #fff;
  font-family: 'Nanum Gothic';

  div {
    margin: 0;
    padding: 0;
  }

  .defaultEffectWrap {
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    flex-grow: 0;
    align-items: center;
    border-bottom: 1px solid #c1c1c1;
    padding: 10px;

    div {
      width: auto;
      margin: 0 auto;
      padding: 5px 0px;
    }
  }

  .vitalityWrap {
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom: 1px solid #c1c1c1;
    padding: 10px;

    div {
      width: auto;
      margin: 0 auto;
      padding: 5px 0px;
    }
  }

  .elixirWrap {
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom: 1px solid #c1c1c1;
    padding: 10px;

    div {
      width: auto;
      display: flex;
      flex-direction: column;
      margin: 0 auto;
      padding: 5px 0px;
      text-align: center;
    }
  }

  .levelWrap {
    width: 80%;
    height: 50px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;

    div {
      display: flex;
      margin: 0 auto;
      padding: 5px 0px;
    }
  }
`;

const AccessoriesTooltipWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: absolute;
  background-color: rgb(41, 46, 51, 1);
  border-radius: 10px;
  width: 240px;
  height: 90%;
  top: 0;
  left: 22.5%;
  right: 0;
  bottom: 0;
  color: #fff;
  font-family: 'Nanum Gothic';

  div {
    margin: 0;
    padding: 0;
  }

  .defaultEffectWrap {
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    flex-grow: 0;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #c1c1c1;
    div {
      width: auto;
      margin: 0 auto;
      padding: 5px 0px;
    }
  }

  .vitalityWrap {
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;

    div {
      width: auto;
      margin: 0 auto;
      padding: 5px 0px;
    }
  }

  .elixirWrap {
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;

    div {
      width: auto;
      display: flex;
      flex-direction: column;
      margin: 0 auto;
      padding: 5px 0px;
      text-align: center;
    }
  }

  .levelWrap {
    width: 80%;
    height: 50px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;

    div {
      display: flex;
      margin: 0 auto;
      padding: 5px 0px;
    }
  }
`;

const CharacterEquipmentPart = ({ equipment, engraving }) => {
  // 장비 정보 조회

  const filterAccessories =
    equipment &&
    equipment.filter(
      (item) =>
        item.Type !== '투구' &&
        item.Type !== '무기' &&
        item.Type !== '상의' &&
        item.Type !== '하의' &&
        item.Type !== '어깨' &&
        item.Type !== '장갑' &&
        item.Type !== '부적' &&
        item.Type !== '나침반'
    );

  // 아이템 정렬
  const equipmentTooltip = [];

  for (const item in equipment) {
    equipmentTooltip.push(JSON.parse(equipment[item].Tooltip));
  }

  const sortEquipmentTooltip = [
    equipmentTooltip[1],
    equipmentTooltip[5],
    equipmentTooltip[2],
    equipmentTooltip[3],
    equipmentTooltip[4],
    equipmentTooltip[0],
  ];

  const sortAccessoriesTooltip = [
    equipmentTooltip[6],
    equipmentTooltip[7],
    equipmentTooltip[8],
    equipmentTooltip[9],
    equipmentTooltip[10],
    equipmentTooltip[11],
    equipmentTooltip[12],
  ];

  // 장비 툴팁 추출
  const equipmentEffectTooltip = [];
  const accessoriesEffectTooltip = []; // 악세 툴팁

  if (sortEquipmentTooltip) {
    const filterTooltip = [];
    for (let i = 0; i <= sortEquipmentTooltip.length - 1; i++) {
      const filterValue = [];

      // 기본, 추가효과, 세트레벨
      for (let key in sortEquipmentTooltip[i]) {
        if (sortEquipmentTooltip[i][key].type === 'ItemPartBox') {
          filterValue.push({
            effect: sortEquipmentTooltip[i][key].value['Element_001'],
          });
        }
      }

      // 엘릭서
      for (let key in sortEquipmentTooltip[i]) {
        if (
          sortEquipmentTooltip[i][key].type === 'IndentStringGroup' &&
          sortEquipmentTooltip[i][key].value['Element_000'].contentStr[
            'Element_000'
          ].bPoint
        ) {
          filterValue.push({
            Elixir:
              sortEquipmentTooltip[i][key].value['Element_000'].contentStr[
                'Element_000'
              ]?.contentStr,
            Elixir2:
              sortEquipmentTooltip[i][key].value['Element_000']?.contentStr[
                'Element_001'
              ]?.contentStr,
          });
        }
      }

      // 아이템 레벨
      for (let key in sortEquipmentTooltip[i]) {
        if (sortEquipmentTooltip[i][key].type === 'ItemTitle') {
          filterValue.push({
            itemName: sortEquipmentTooltip[i][key].value.leftStr0,
            quality: sortEquipmentTooltip[i][key].value.qualityValue,
            itemLevel: sortEquipmentTooltip[i][key].value.leftStr2,
          });
        }
      }

      filterTooltip.push({
        tooltip: filterValue,
      });
    }

    for (let i = 0; i < filterTooltip.length; i++) {
      const splitBR = filterTooltip[i].tooltip[0].effect.split('<BR>');
      const removeFont = filterTooltip[i].tooltip[2]?.effect?.replace(
        /<\/?FONT[^>]*>/gi,
        ''
      );

      const elixir1 = filterTooltip[i].tooltip[3]?.Elixir?.replace(
        /<\/?FONT[^>]*>/g,
        ''
      ).split(/<br>|<BR>/);

      const elixir2 = filterTooltip[i].tooltip[3]?.Elixir2?.replace(
        /<\/?FONT[^>]*>/gi,
        ''
      ).split(/<br>|<BR>/);

      const itemName = filterTooltip[i].tooltip[
        filterTooltip[i].tooltip.length - 1
      ].itemName.replace(/<\/?FONT[^>]*>/gi, '');

      const itemLevel = filterTooltip[i].tooltip[
        filterTooltip[i].tooltip.length - 1
      ].itemLevel.replace(/<\/?FONT[^>]*>/gi, '');

      const itemQuality =
        filterTooltip[i].tooltip[filterTooltip[i].tooltip.length - 1].quality;

      if (i < 5) {
        equipmentEffectTooltip.push({
          physics: splitBR[0],
          magic: splitBR[1],
          characteristic: splitBR[2],
          health: splitBR[3],
          vitality: filterTooltip[i].tooltip[1].effect,
          level: removeFont,
          itemName,
          itemLevel,
          itemQuality,
          elixir1,
          elixir2,
        });
      } else {
        equipmentEffectTooltip.push({
          offensePower: filterTooltip[i].tooltip[0].effect,
          additionalDamage: filterTooltip[i].tooltip[1].effect,
          level: removeFont,
          itemName,
          itemLevel,
          itemQuality,
        });
      }
    }
  }

  if (sortAccessoriesTooltip) {
    const filterTooltip = [];
    for (let i = 0; i < sortAccessoriesTooltip.length; i++) {
      const filterValue = [];

      if (i !== sortAccessoriesTooltip.length) {
        // 특성
        for (let key in sortAccessoriesTooltip[i]) {
          if (sortAccessoriesTooltip[i][key].type === 'ItemPartBox') {
            filterValue.push({
              effect: sortAccessoriesTooltip[i][key].value['Element_001'],
            });
          }
        }

        // 각인
        for (let key in sortAccessoriesTooltip[i]) {
          if (sortAccessoriesTooltip[i][key].type === 'IndentStringGroup') {
            filterValue.push({
              engrave1:
                sortAccessoriesTooltip[i][key]?.value['Element_000']
                  ?.contentStr['Element_000']?.contentStr,
              engrave2:
                sortAccessoriesTooltip[i][key]?.value['Element_000']
                  ?.contentStr['Element_001']?.contentStr,
              engrave3:
                sortAccessoriesTooltip[i][key]?.value['Element_000']
                  ?.contentStr['Element_002']?.contentStr,
            });
          }
        }
      }

      // 팔찌;
      if (i === sortAccessoriesTooltip.length) {
        for (let key in sortAccessoriesTooltip[i + 1]) {
          if (sortAccessoriesTooltip[i + 1][key].type === 'ItemPartBox') {
            console.log(
              sortAccessoriesTooltip[i + 1][key].value['Element_001']
            );
            filterValue.push({
              effect: sortAccessoriesTooltip[i + 1][key].value['Element_001'],
            });
          }
        }
      }

      filterTooltip.push({
        tooltip: filterValue,
      });
    }

    for (let i = 0; i < filterTooltip.length; i++) {
      console.log(filterTooltip[i]);

      const effectBR = filterTooltip[i].tooltip[1]?.effect?.split('<BR>');

      const engrave1 = filterTooltip[i].tooltip[2]?.engrave1
        ?.replace(/(<([^>]+)>|\[|\]|<BR>)/gi, '')
        .replace(/(활성도\s*\+\s*\d+)/gi, '$1 ')
        .replace(/활성도\s+/gi, '');

      const engrave2 = filterTooltip[i].tooltip[2]?.engrave2
        ?.replace(/(<([^>]+)>|\[|\]|<BR>)/gi, '')
        .replace(/(활성도\s*\+\s*\d+)/gi, '$1 ')
        .replace(/활성도\s+/gi, '');

      const engrave3 = filterTooltip[i].tooltip[2]?.engrave3
        ?.replace(/(<([^>]+)>|\[|\]|<BR>)/gi, '')
        .replace(/(활성도\s*\+\s*\d+)/gi, '$1 ')
        .replace(/활성도\s+/gi, '');

      const breceletEffect = filterTooltip[
        filterTooltip.length - 1
      ].tooltip[0]?.effect
        ?.replace(/<\/?img[^>]*>/g, '')
        .replace(/undefined/g, '');

      let effectsplitBR = breceletEffect?.split('<BR>');

      if (effectsplitBR) {
        for (let j = 0; j < effectsplitBR.length; j++) {
          if (effectsplitBR[j].includes('[')) {
            const name = effectsplitBR[j].split('</FONT>]');
            effectsplitBR[j] = {
              name: name[0].replace('[', '').replace("<FONT COLOR=''>", ''),
              effect: name[1],
            };
          }

          if (
            typeof effectsplitBR[j] === 'string' &&
            effectsplitBR[j].includes('</FONT>')
          ) {
            effectsplitBR[j] = effectsplitBR[j].replace(/<\/?FONT[^>]*>/gi, '');
          }
        }
      }

      if (i !== filterTooltip.length - 1) {
        accessoriesEffectTooltip.push({
          characteristic: effectBR,
          engrave1,
          engrave2,
          engrave3,
        });
      } else {
        accessoriesEffectTooltip.push({ breceletEffect: effectsplitBR });
      }
    }
  }

  const equipmentList = [
    {
      Type: '투구',
      Tooltip: '머리장식',
      TooltipValue: equipmentEffectTooltip[0],
    },
    {
      Type: '어깨',
      Tooltip: '견갑',
      TooltipValue: equipmentEffectTooltip[1],
    },
    {
      Type: '상의',
      Tooltip: '상의',
      TooltipValue: equipmentEffectTooltip[2],
    },
    {
      Type: '하의',
      Tooltip: '하의',
      TooltipValue: equipmentEffectTooltip[3],
    },
    {
      Type: '장갑',
      Tooltip: '장갑',
      TooltipValue: equipmentEffectTooltip[4],
    },
    {
      Type: '무기',
      TooltipValue: equipmentEffectTooltip[5],
    },
  ];

  const accessoriesList = [
    { Type: '목걸이', TooltipValue: accessoriesEffectTooltip[0] },
    { Type: '귀걸이', TooltipValue: accessoriesEffectTooltip[1] },
    { Type: '귀걸이', TooltipValue: accessoriesEffectTooltip[2] },
    { Type: '반지', TooltipValue: accessoriesEffectTooltip[3] },
    { Type: '반지', TooltipValue: accessoriesEffectTooltip[4] },
    { Type: '어빌리티 스톤', TooltipValue: accessoriesEffectTooltip[5] },
    { Type: '팔찌', TooltipValue: accessoriesEffectTooltip[6] },
  ];

  const stoneAndBracelet = [];
  // equipment에서 스톤과 팔찌를 추출한다.
  if (equipment) {
    for (const key in equipment) {
      if (
        equipment[key].Type !== '무기' &&
        equipment[key].Type !== '투구' &&
        equipment[key].Type !== '상의' &&
        equipment[key].Type !== '하의' &&
        equipment[key].Type !== '장갑' &&
        equipment[key].Type !== '어깨' &&
        equipment[key].Type !== '나침반' &&
        equipment[key].Type !== '부적' &&
        equipment[key].Type !== '목걸이' &&
        equipment[key].Type !== '귀걸이' &&
        equipment[key].Type !== '반지'
      ) {
        stoneAndBracelet.push({ ...equipmentTooltip[key] });
      }
    }
  }

  let stoneIndex = -1;
  let braceletIndex = -1;
  const breceletEffectList = [];
  // 팔찌효과 추출
  if (stoneAndBracelet) {
    // 어빌리티 스톤 각인 활성화가 들어있는 인덱스를 탐색하는 for..in문
    for (const key in stoneAndBracelet[0]) {
      if (stoneAndBracelet[0][key].type === 'IndentStringGroup') {
        stoneIndex = key;
        break;
      }
    }
    // 팔찌에서 팔찌 효과가 들어있는 인덱스를 탐색
    if (stoneAndBracelet[1] !== undefined) {
      for (const key in stoneAndBracelet[1]) {
        if (stoneAndBracelet[1][key].type === 'ItemPartBox') {
          braceletIndex = key;
          break;
        }
      }
      const braceletEffect =
        stoneAndBracelet &&
        stoneAndBracelet[1] !== undefined &&
        stoneAndBracelet[1][braceletIndex].value['Element_001'];

      const braceletElements = braceletEffect.split('<BR>');
      const regularExpressionResult = [];
      for (let i = 0; i < braceletElements.length; i++) {
        const text = braceletElements[i]
          .replace(/<[^>]+>/g, '')
          .replace(/\[|\]/g, '')
          .replace(/['"]/g, '')
          .trim();

        if (text[text.length - 1] === ')' || !isNaN(text[text.length - 1])) {
          regularExpressionResult.push(text);
          const textSplit = text.split(':');

          if (textSplit.length > 1) {
            breceletEffectList.push({
              text: textSplit[0],
              description: textSplit[1],
            });
          } else {
            const textSplice = text.split(' ');
            breceletEffectList.push({
              text: textSplice[0],
              description: textSplice[1],
            });
          }
        } else {
          regularExpressionResult.concat(text);
        }
      }

      // 정규식을 이용해서 팔찌효과를 추출한 뒤 객체에 저장
    }
  }

  // 장착 각인

  const mountedEngraving = engraving && engraving.Engravings;
  const mountedEngravingTooltip = [];

  // 문자열로 되어있는 객체를 객체로 변환
  mountedEngraving &&
    mountedEngraving.map((item) =>
      mountedEngravingTooltip.push(JSON.parse(item.Tooltip))
    );

  // 장착된 각인 활성화를 추출한다.
  const mountedEngravingItem = mountedEngravingTooltip
    .map((obj) => obj.Element_001)
    .filter((obj) => obj.type === 'EngraveSkillTitle')
    .map((obj) => obj.value.leftText);

  const EquipmentTooltipBox = ({ item, index }) => {
    const [showTooltip, setShowTooltip] = useState(false);

    return (
      <Fragment>
        <div key={index}>
          {showTooltip &&
            (item.Type !== '무기' ? (
              <EquipmentTooltipWrap>
                <div className="defaultEffectWrap">
                  <div>{item.TooltipValue.physics}</div>
                  <div>{item.TooltipValue.magic}</div>
                  <div>{item.TooltipValue.characteristic}</div>
                  <div>{item.TooltipValue.health}</div>
                </div>
                <div className="vitalityWrap">
                  <div>{item.TooltipValue.vitality}</div>
                </div>
                <div className="elixirWrap">
                  <div>
                    {item.TooltipValue.elixir1 &&
                      item.TooltipValue.elixir1.map((item, index) => (
                        <div key={index} className="exlirItem">
                          {item}
                        </div>
                      ))}
                  </div>
                  <div>
                    {item.TooltipValue.elixir2 &&
                      item.TooltipValue.elixir2.map((item, index) => (
                        <div key={index} className="exlirItem">
                          {item}
                        </div>
                      ))}
                  </div>
                </div>
                <div className="levelWrap">
                  <div>{item.TooltipValue.level}</div>
                  <div>{item.TooltipValue.itemName}</div>
                  <div>{item.TooltipValue.itemLevel}</div>
                </div>
              </EquipmentTooltipWrap>
            ) : (
              <EquipmentTooltipWrap>
                <div className="defaultEffectWrap">
                  <div>{item.TooltipValue.offensePower}</div>
                </div>
                <div className="vitalityWrap">
                  <div>{item.TooltipValue.additionalDamage}</div>
                </div>
                <div className="levelWrap">
                  <div>{item.TooltipValue.level}</div>
                  <div>{item.TooltipValue.itemName}</div>
                  <div>{item.TooltipValue.itemLevel}</div>
                </div>
              </EquipmentTooltipWrap>
            ))}
          {equipment.map(
            (items) =>
              items.Type === item.Type && (
                <Fragment key={index}>
                  <ImageBox
                    onMouseOver={() => setShowTooltip(true)}
                    onMouseLeave={() => setShowTooltip(false)}
                  >
                    <ImageBoxColor key={index} exist={items.Grade}>
                      <img src={items.Icon} alt="아바타" />
                    </ImageBoxColor>
                  </ImageBox>
                  <div className="desc">
                    <p className="type">{items.Name}</p>
                    <PercentBar
                      quality={
                        sortEquipmentTooltip[index] &&
                        sortEquipmentTooltip[index]['Element_001'].value
                          .qualityValue
                      }
                    >
                      <p>
                        {sortEquipmentTooltip[index] &&
                          sortEquipmentTooltip[index]['Element_001'].value
                            .qualityValue}
                      </p>
                      <div>
                        <div></div>
                      </div>
                    </PercentBar>
                  </div>
                </Fragment>
              )
          )}
        </div>
      </Fragment>
    );
  };

  const AccessoriesTooltipBox = ({ item, index }) => {
    const [showTooltip, setShowTooltip] = useState(false);

    return (
      <div key={index}>
        {showTooltip &&
          (item.Type !== '팔찌' ? (
            <AccessoriesTooltipWrap>
              <div className="defaultEffectWrap">
                <div>
                  {item.TooltipValue.characteristic[0] &&
                    item.TooltipValue.characteristic[0]}
                </div>
                <div>
                  {item.TooltipValue.characteristic[1] &&
                    item.TooltipValue.characteristic[1]}
                </div>
              </div>
              <div className="vitalityWrap">
                <div>{item.TooltipValue.engrave1}</div>
                <div>{item.TooltipValue.engrave2}</div>
                <div>{item.TooltipValue.engrave3}</div>
              </div>
            </AccessoriesTooltipWrap>
          ) : (
            <AccessoriesTooltipWrap>
              <div className="vitalityWrap">
                {item.TooltipValue.breceletEffect.map((items, index) =>
                  !items.name ? (
                    <div key={index}>{items}</div>
                  ) : (
                    <div className="elixirWrap" key={index}>
                      <div>{items.name}</div>
                      <div>{items.effect}</div>
                    </div>
                  )
                )}
              </div>
            </AccessoriesTooltipWrap>
          ))}
        <Fragment key={index}>
          <ImageBox>
            <ImageBoxColor
              key={index}
              exist={
                filterAccessories[index] !== undefined &&
                filterAccessories[index].Grade
              }
            >
              {filterAccessories && filterAccessories[index] && (
                <img
                  key={index}
                  src={filterAccessories[index].Icon}
                  alt="아바타"
                  onMouseOver={() => setShowTooltip(true)}
                  onMouseLeave={() => setShowTooltip(false)}
                />
              )}
            </ImageBoxColor>
          </ImageBox>
          <div className="desc">
            <p className="type">
              {filterAccessories &&
                filterAccessories[index] &&
                filterAccessories[index].Name}
            </p>
            {index < 5 && (
              <PercentBar
                quality={
                  sortAccessoriesTooltip &&
                  sortAccessoriesTooltip[index] &&
                  sortAccessoriesTooltip[index]['Element_001'].value
                    .qualityValue
                }
                key={index}
              >
                <p>
                  {sortAccessoriesTooltip &&
                    sortAccessoriesTooltip[index] &&
                    sortAccessoriesTooltip[index]['Element_001'].value
                      .qualityValue}
                </p>
                <div>
                  <div></div>
                </div>
              </PercentBar>
            )}
            {index === 5 && (
              <div>
                <p style={{ margin: '0 8px', color: '#f8f5a4' }}>
                  {stoneAndBracelet[0] &&
                    stoneAndBracelet[0][stoneIndex] &&
                    stoneAndBracelet[0][stoneIndex].value[
                      'Element_000'
                    ].contentStr['Element_000'].contentStr.slice(-5, -4)}
                </p>
                <BsDot />
                <p style={{ margin: '0 8px', color: '#f8f5a4' }}>
                  {stoneAndBracelet[0] &&
                    stoneAndBracelet[0][stoneIndex] &&
                    stoneAndBracelet[0][stoneIndex].value[
                      'Element_000'
                    ].contentStr['Element_001'].contentStr.slice(-5, -4)}
                </p>
                <BsDot />
                <p style={{ margin: '0 8px', color: '#832c35' }}>
                  {stoneAndBracelet[0] &&
                    stoneAndBracelet[0][stoneIndex] &&
                    stoneAndBracelet[0][stoneIndex].value[
                      'Element_000'
                    ].contentStr['Element_002'].contentStr.slice(-5, -4)}
                </p>
              </div>
            )}
            <div style={{ display: 'flex' }}>
              {index === 6 &&
                breceletEffectList.map((item, index) => (
                  <p key={index} style={{ margin: '0 2px 0 4px' }}>
                    {item.text}
                  </p>
                ))}
            </div>
          </div>
        </Fragment>
      </div>
    );
  };

  return (
    <EquipmentWrap>
      <FlexWrap>
        <TrueInner>
          {equipmentList.map((item, index) => (
            <EquipmentTooltipBox item={item} index={index} key={index} />
          ))}
          <div>
            {mountedEngraving &&
              mountedEngraving.map((item, index) => (
                <MountedEngraving
                  key={index}
                  grade={mountedEngravingItem[index].slice(-10, -7)}
                >
                  <img src={item.Icon} alt="장착된 각인" />
                  <div>
                    <p className="name">{item.Name}</p>
                    <p>{mountedEngravingItem[index].slice(-10, -7)}</p>
                  </div>
                </MountedEngraving>
              ))}
          </div>
        </TrueInner>
        <FalseInner>
          {accessoriesList &&
            accessoriesList.map((item, index) => (
              <AccessoriesTooltipBox item={item} index={index} key={index} />
            ))}
        </FalseInner>
      </FlexWrap>
    </EquipmentWrap>
  );
};

export default React.memo(CharacterEquipmentPart);
