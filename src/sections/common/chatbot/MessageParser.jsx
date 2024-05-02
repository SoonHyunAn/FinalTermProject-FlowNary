import React from 'react';

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    if (message.includes('1')) {
      actions.handleHelp("로그인 및 회원가입 방법");
      return;
    }

    if (message.includes('2')) {
      actions.handleHelp("게시글 관련 문의");
      return;
    }

    if (message.includes('3')) {
      actions.handleHelp("마이페이지 관련 문의");
      return;
    }

    if (message.includes('4')) {
      actions.handleHelp("채팅 관련 문의");
      return;
    }

    if (message.includes('5')) {
      actions.handleHelp("기타 오류 및 문의사항 1:1 메일로 보내기");
      return;
    }

    if (message.includes('로그인')) {
      actions.handleLogin();
      return;
    }

    if (message.includes('회원가입')) {
      actions.handleRegister();
      return;
    }

    if (message.includes('회원탈퇴')) {
      actions.handleDeleteAccount();
      return;
    }

    if (message.includes('게시글 쓰기')) {
      actions.handleBoardWrite();
      return;
    }

    if (message.includes('게시글 수정')) {
      actions.handleBoardUpdate();
      return;
    }

    if (message.includes('게시글 삭제')) {
      actions.handleBoardDelete();
      return;
    }

    if (message.includes('게시글 공유')) {
      actions.handleBoardShare();
      return;
    }

    if (message.includes('게시글 좋아요')) {
      actions.handleBoardLike();
      return;
    }

    if (message.includes('개인정보 수정')) {
      actions.handleProfileUpdate();
      return;
    }

    if (message.includes('프로필사진 변경')) {
      actions.handleProfileImageUpdate();
      return;
    }

    if (message.includes('비밀번호 변경')) {
      actions.handleProfilePasswordChange();
      return;
    }

    if (message.includes('도메인 주소')) {
      actions.handleProfileDomain();
      return;
    }

    if (message.includes('계정 비활성화')) {
      actions.handleProfileAccountDisable();
      return;
    }

    if (message.includes('친구와 채팅')) {
      actions.handleChatting();
      return;
    }

    if (message.includes('채팅 중단')) {
      actions.handleChattingStop();
      return;
    }

    if (message.includes('메시지 차단')) {
      actions.handleChattingBlock();
      return;
    }

    if (message.includes('도움말')) {
      actions.handleAdminHelp();
      return;
    }

    if (message.includes('안녕')) {
      actions.handleHello();
      return;
    }

    actions.handleUnknownMessage();
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;
