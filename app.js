/* eslint-disable */
// noinspection JSUnresolvedReference,NodeCoreCodingAssistance,JSUnresolvedReference

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
    const originalPath = `./result/${id}.webp`;
    fs.writeFileSync(originalPath, response.data);

    // 48px 이미지 저장
    const x48Path = `./result/${id}_x48.webp`;
    const x48Image = sharp(response.data);
    await x48Image
      .resize({ width: 48 })
      .toFile(x48Path);

    // 이미지 크기 조정 후 저장
    const resizedImagePath = `./result/${id}_lqip.webp`;
    const resizedImage = sharp(response.data);
    // const metadata = await image.metadata();
    await resizedImage
      // .resize({ width: Math.round(metadata.width / 10) })
      .resize({ width: 8 })
      .toFile(resizedImagePath);

    console.log('done:', id);
  };

  const nationCase = async (response) => {
    // 원본 이미지 저장
    const originalImage = `result/${id}.webp`;
    fs.writeFileSync(originalImage, response.data);

    const resizedImagePath = `./result/${id}_lqip.webp`;
    const resizedImage = sharp(response.data);
    await resizedImage
      .resize({ height: 16 })
      .toFile(resizedImagePath);

    console.log('done:', id);
  };

  try {
    // 이미지 다운로드
    const response = await axios({
      url,
      responseType: 'arraybuffer',
    });
    
    // TODO: 여기 수정
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
