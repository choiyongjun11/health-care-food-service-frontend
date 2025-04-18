import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Card = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 1rem;
`;

const InputGroup = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.3rem;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  background-color: ${({ variant }) => (variant === "danger" ? "#e74c3c" : "#71B700")};
  color: white;
  margin-right: 0.5rem;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const Text = styled.p`
  font-size: 0.9rem;
  color: #333;
`;

export default function UserSettings() {
  const [userData, setUserData] = useState(null);
  const [password, setPassword] = useState({
    current: "",
    new: "",
    confirm: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [deleteConfirmation, setDeleteConfirmation] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      const email = localStorage.getItem("email");
      try {
        const response = await fetch(`http://localhost:3001/users?email=${email}`);
        const result = await response.json();
        if (result.length > 0) {
          const user = result[0];
          setUserData({
            id: user.id,
            email: user.email,
            password: user.password,
            username: user.username,
            birthday: user.birthday,
            phoneNumber: user.phoneNumber,
          });
        }
      } catch (error) {
        console.error("사용자 정보 가져오기 실패", error);
      }
    };
    fetchUser();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPassword((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    try {
      const response = await fetch(`http://localhost:3001/users/${userData.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        alert("사용자 정보가 성공적으로 저장되었습니다.");
        setIsEditing(false);
      } else {
        alert("저장에 실패했습니다.");
      }
    } catch (error) {
      console.error("저장 실패", error);
      alert("서버 오류가 발생했습니다.");
    }
  };

  const handleChangePassword = async () => {
    if (password.new !== password.confirm) {
      alert("새 비밀번호와 확인 비밀번호가 일치하지 않습니다.");
      return;
    }
if (password.current.trim() !== String(userData.password).trim()) {
  alert("현재 비밀번호가 올바르지 않습니다.");
  return;
}

    try {
      const updatedUser = {
        ...userData,
        password: password.new,
      };

      const response = await fetch(`http://localhost:3001/users/${userData.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedUser),
      });

      if (response.ok) {
        alert("비밀번호가 성공적으로 변경되었습니다.");
        setUserData(updatedUser);
        setPassword({ current: "", new: "", confirm: "" });
      } else {
        alert("비밀번호 변경 실패");
      }
    } catch (error) {
      console.error("비밀번호 변경 실패", error);
      alert("서버 오류로 비밀번호 변경에 실패했습니다.");
    }
  };

  const handleDeleteAccount = async () => {
    if (deleteConfirmation === "회원탈퇴") {
      try {
        const response = await fetch(`http://localhost:3001/users/${userData.id}`, {
          method: "DELETE",
        });
        if (response.ok) {
          alert("계정이 삭제되었습니다.");
          localStorage.clear();
          window.location.href = "/";
        } else {
          alert("계정 삭제에 실패했습니다.");
        }
      } catch (error) {
        console.error("계정 삭제 실패", error);
      }
    }
  };

  if (!userData) return <Container>사용자 정보를 불러오는 중...</Container>;

  return (
    <Container>
      <Card>
        <SectionTitle>개인 정보 설정</SectionTitle>
        <Description>계정 정보를 확인하고 수정할 수 있습니다.</Description>

        <InputGroup>
          <Label htmlFor="username">이름</Label>
          {isEditing ? (
            <Input id="username" name="username" value={userData.username} onChange={handleChange} />
          ) : (
            <Text>{userData.username}</Text>
          )}
        </InputGroup>

        <InputGroup>
          <Label htmlFor="birthday">생년월일</Label>
          {isEditing ? (
            <Input
              id="birthday"
              name="birthday"
              type="date"
              value={userData.birthday}
              onChange={handleChange}
            />
          ) : (
            <Text>{userData.birthday}</Text>
          )}
        </InputGroup>

        <InputGroup>
          <Label htmlFor="phoneNumber">휴대전화번호</Label>
          {isEditing ? (
            <Input id="phoneNumber" name="phoneNumber" value={userData.phoneNumber} onChange={handleChange} />
          ) : (
            <Text>{userData.phoneNumber}</Text>
          )}
        </InputGroup>

        {isEditing ? (
          <>
            <Button onClick={() => setIsEditing(false)}>취소</Button>
            <Button onClick={handleSave}>저장</Button>
          </>
        ) : (
          <Button onClick={() => setIsEditing(true)}>정보 수정</Button>
        )}
      </Card>

      <Card>
        <SectionTitle>비밀번호 변경</SectionTitle>
        <Description>계정 보안을 위해 주기적으로 비밀번호를 변경해주세요.</Description>

        <InputGroup>
          <Label htmlFor="current">현재 비밀번호</Label>
          <Input
            id="current"
            name="current"
            type="password"
            value={password.current}
            onChange={handlePasswordChange}
          />
        </InputGroup>

        <InputGroup>
          <Label htmlFor="new">새 비밀번호</Label>
          <Input id="new" name="new" type="password" value={password.new} onChange={handlePasswordChange} />
        </InputGroup>

        <InputGroup>
          <Label htmlFor="confirm">비밀번호 확인</Label>
          <Input id="confirm" name="confirm" type="password" value={password.confirm} onChange={handlePasswordChange} />
        </InputGroup>

        <Button onClick={handleChangePassword}>비밀번호 변경</Button>
      </Card>

      <Card>
        <SectionTitle style={{ color: "#e74c3c" }}>계정 삭제</SectionTitle>
        <Description>계정을 삭제하면 모든 데이터가 영구적으로 제거되며 복구할 수 없습니다.</Description>

        <InputGroup>
          <Label htmlFor="confirmDelete">'회원탈퇴' 입력</Label>
          <Input
            id="confirmDelete"
            value={deleteConfirmation}
            onChange={(e) => setDeleteConfirmation(e.target.value)}
            placeholder="회원탈퇴"
          />
        </InputGroup>

        <Button
          variant="danger"
          onClick={handleDeleteAccount}
          disabled={deleteConfirmation !== "회원탈퇴"}
        >
          계정 삭제
        </Button>
      </Card>
    </Container>
  );
}
