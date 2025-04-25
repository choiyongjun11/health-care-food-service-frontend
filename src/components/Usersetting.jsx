import React, { useEffect, useState } from "react";

import styled from "styled-components";

//ui 만 담당합니다.

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
  background-color: ${({ $variant }) =>
    $variant === "danger" ? "#e74c3c" : "#71B700"};
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

export default function UserSettings({ userData, onUpdateUser, onDeleteUser }) {
  const [editableUser, setEditableUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState("");

  useEffect(() => {
    setEditableUser(userData);
  }, [userData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditableUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    if (editableUser) {
      onUpdateUser(editableUser);
      setIsEditing(false);
    }
  };

  if (!editableUser) return <Container>사용자 정보를 불러오는 중입니다...</Container>;

  

  return (
    <Container>
      {/* 개인 정보 */}
      <Card>
        <SectionTitle>개인 정보</SectionTitle>
        <Label>이름</Label>
        {isEditing ? (
          <Input name="name" value={editableUser.name} onChange={handleChange} />
        ) : (
          <Text>{editableUser.name}</Text>
        )}

        <Label>생년월일</Label>
        {isEditing ? (
          <Input
            name="birthday"
            type="date"
            value={editableUser.birthday}
            onChange={handleChange}
          />
        ) : (
          <Text>{editableUser.birthday}</Text>
        )}

        <Label>전화번호</Label>
        {isEditing ? (
          <Input name="phone" value={editableUser.phone} onChange={handleChange} />
        ) : (
          <Text>{editableUser.phone}</Text>
        )}

        {isEditing ? (
          <>
            <Button onClick={handleSave}>저장</Button>
            <Button onClick={() => setIsEditing(false)}>취소</Button>
          </>
        ) : (
          <Button onClick={() => setIsEditing(true)}>정보 수정</Button>
        )}
      </Card>

      {/* 계정 삭제 */}
      <Card>
        <SectionTitle style={{ color: "#e74c3c" }}>계정 삭제</SectionTitle>
        <Input
          placeholder="'회원탈퇴' 입력하시오."
          value={deleteConfirm}
          onChange={(e) => setDeleteConfirm(e.target.value)}
        />

        <Button
          $variant="danger"
          onClick={() => {
            if (window.confirm("정말로 계정을 삭제하시겠습니까?")) {
              onDeleteUser();
            }
          }}
          disabled={deleteConfirm !== "회원탈퇴"}
        >
          계정 삭제
        </Button>

      </Card>
    </Container>
  );
}
