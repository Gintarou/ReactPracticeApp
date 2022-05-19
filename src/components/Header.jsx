/** @jsxImportSource @emotion/react */
import React from "react"

import { css } from "@emotion/react";

export const Header = () => (
  <div css={wrapper}>
    <h1>this is header</h1>
  </div>
);

const wrapper = css({
  background: 'pink',
  width: '100%',
  height: '80px',
});