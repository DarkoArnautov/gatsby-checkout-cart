import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import device from "../common/device";

const Widget = styled.div`
  width: 100%;
  background: #FFFBEC;
  border: 1px solid #9E9E9E;
  border-radius: 9px;
  padding: 15px;

  .header {
    width: 100%;
    text-align: center;
    font-size: 25px;
    line-height: 1;
    margin: 0 0 14px;
  }
  .content {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    div {
      width: 100%;
      min-height: 105px;

      .gatsby-image-wrapper {
        width: 100%;
        height: auto;
        aspect-ratio: 1.5;
      }

      p {
        font-size: 18px;
        line-height: 25px;
        font-weight: 300;
        color: #000000;
        margin-bottom: 15px;
      }

      .price {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-weight: 600;

        .original {
          color: rgba(0, 0, 0, .6);
          text-decoration: line-through;
          text-decoration-color: rgba(0, 0, 0, .6);
          font-weight: 400;
        }
      }
    }
  }
  @media${device.phone} {
    .content {
      flex-wrap: wrap;

      div {
        width: calc(50% - 8px);
      }
    }
  }
  @media${device.phoneL} {
    .content {
      align-items: center;
      flex-wrap: nowrap;
    }
  }
  @media${device.tablet} {
    .content {
      align-items: flex-start;
    }
  }
`;

const AddButton = styled.button`

`

const CoolCatWidget = () => (
  <Widget>
    <h3 className="header">Only For Cool Cats...</h3>
    <div className="content">
      <div>
        <StaticImage
          src="../../images/cat-street-hero-olive.png"
          quality={95}
          alt="cat-street"
        />
      </div>
      <div>
        <p>Add the “Catnip” cover to your order and save 5%</p>
        <p className="price"><span>$122.55</span> <span className="original">$129.00</span></p>
        <AddButton>
          Add Now
        </AddButton>
      </div>
    </div>
  </Widget>
);

export default CoolCatWidget;