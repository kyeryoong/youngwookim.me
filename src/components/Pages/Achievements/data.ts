export type achievementDataType = {
  kor: string;
  alt: string;
  images: string[];
};

const achievementData: achievementDataType[] = [
  {
    kor: '홍익대학교 컴퓨터공학과 졸업 전시회',
    alt: 'Graduation Project',
    images: [
      '/achievements/graduation_project/1.jpg',
      '/achievements/graduation_project/2.jpg',
      '/achievements/graduation_project/3.jpg',
      '/achievements/graduation_project/4.jpg',
      '/achievements/graduation_project/5.jpg',
      '/achievements/graduation_project/6.jpg',
      '/achievements/graduation_project/7.jpg',
    ],
  },
  {
    kor: '마이 핀테크 서비스 해커톤',
    alt: 'Fintech Hackerton',
    images: [
      '/achievements/fintech_hackerton/1.jpg',
      '/achievements/fintech_hackerton/2.jpg',
      '/achievements/fintech_hackerton/3.jpg',
      '/achievements/fintech_hackerton/4.jpg',
      '/achievements/fintech_hackerton/5.jpg',
      '/achievements/fintech_hackerton/6.jpg',
    ],
  },
];

export default achievementData;
