type GetEmailHtmlProps = {
  type: 'post' | 'create';
  title: string;
  userName: string;
  createdAt: string;
};

const getEmailHtml = ({ type, title, userName, createdAt }: GetEmailHtmlProps) => {
  return `<html>
        <style>
            * {
                font-family: Pretendard;
                font-weight: 500;
                margin: 0px;
                padding: 0px;
            }
        </style>

        <body style="padding: 20px">
            <header>
                <h2 style="font-size: 1rem; font-weight: 600; margin: 0px; color: black; text-decoration: none;">youngwookim.me</h2>
                <h3 style="font-size: 1.5rem; font-weight: 600; margin: 0px; color: black;">${type === 'post' ? '게시글' : '답글'} 작성 알림</h3>
                <div style="border-top: 1px solid #cacaca; margin-top: 20px; margin-bottom: 20px;"></div>
            </header>
            
            <section>
                <div style="margin-bottom: 4px">
                    <label style="color: #969696; border-right: 1px solid #cacaca; padding-right: 12px; margin-right: 12px">제목</label>
                    <p style="display: inline">${title}</p>
                </div>
                <div style="margin-bottom: 4px">
                    <label style="color: #969696; border-right: 1px solid #cacaca; padding-right: 12px; margin-right: 12px"">작성자</label>
                    <p style="display: inline">${userName}</p>
                </div>
                <div style="margin-bottom: 24px">
                    <label style="color: #969696; border-right: 1px solid #cacaca; padding-right: 12px; margin-right: 12px"">작성 시간</label>
                    <p style="display: inline">${createdAt}</p>
                </div>
                <a href="https://youngwookim.me/post" style="border: none; padding: 10px 16px; border-radius: 4px; background-color: black; color: white; text-decoration: none; ">
                    youngwookim.me로 이동하기
                </a>
            </section>
        </body>
    </html>`;
};

export default getEmailHtml;
