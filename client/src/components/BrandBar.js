import { observer } from "mobx-react-lite";
import { React, useContext } from "react";
import { Context } from "..";
import { Card, Container } from "react-bootstrap";

const BrandBar = observer(() => {
  const { device } = useContext(Context);

  return (
    <Container className="mr-2 d-flex">
      {device.brands.map((brand) => (
        <Card
          style={{ cursor: "pointer" }}
          onClick={() => device.setSelectedBrand(brand)}
          key={brand.id}
          className="p-3"
          border={brand.id === device.selectedBrand.id ? "danger" : "light"}
        >
          {brand.name}
        </Card>
      ))}
    </Container>
  );
});

export default BrandBar;
