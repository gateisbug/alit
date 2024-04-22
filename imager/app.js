/* eslint-disable */
const fs = require('fs');

const axios = require('axios');
const sharp = require('sharp');

// request.json에서 이미지 정보 읽기
async function readImageRequests() {
  try {
    const data = fs.readFileSync('request.json', 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('request.json 파일을 읽는 중 오류 발생:', error);
    return [];
  }
}

async function downloadAndResizeImage(id, url) {
  const imageCase = async (response) => {
    // 원본 이미지 저장
    const originalImage = `result/${id}.png`;
    fs.writeFileSync(originalImage, response.data);

    // 이미지 크기 조정 후 저장
    const resizedImage = `result/${id}_lqip.png`;
    const image = sharp(response.data);
    const metadata = await image.metadata();

    await image
      .resize({ width: Math.round(metadata.width / 10) })
      .toFile(resizedImage);

    console.log('done:', id);
  };

  // const nationCase = async (response) => {
  //   // 원본 이미지 저장
  //   const originalImage = `result/${id}.png`;
  //   fs.writeFileSync(originalImage, response.data);
  //
  //   console.log('done:', id);
  // };

  try {
    // 이미지 다운로드
    const response = await axios({
      url,
      responseType: 'arraybuffer',
    });
    await imageCase(response);
    // await nationCase(response);
  } catch (error) {
    console.error('이미지 처리 중 오류 발생:', error);
  }
}

// request.json에서 읽은 데이터로 각 이미지 처리
async function processImages() {
  const requests = await readImageRequests();
  for (const request of requests) {
    await downloadAndResizeImage(request.name, request.link); // nation case
  }
}

processImages()
  .then(() => {
    console.log('모든 이미지 처리 완료!');
  })
  .catch((error) => {
    console.error('에러 발생:', error);
  });
