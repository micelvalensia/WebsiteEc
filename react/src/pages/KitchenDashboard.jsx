import React, { useEffect } from "react";
import KitchenLayout from "../components/Kitchen/KitchenLayout";
import { useKitchenAuth } from "../components/Kitchen/api/useKitchenAuth";
import { useNavigate } from "react-router";
import KitchenContainerList from "../components/Kitchen/KitchenContainerList";

function KitchenDashboard() {
  const auth = useKitchenAuth();
  const navigate = useNavigate();

  if (!auth) return navigate("/kitchen/login");

  return (
    <>
      <KitchenLayout>
        <KitchenContainerList />
      </KitchenLayout>
    </>
  );
}

export default KitchenDashboard;
