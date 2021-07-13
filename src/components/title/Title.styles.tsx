import styled from "styled-components";

export const StyledTitle = styled.span<{color: string}>`
    font-size: 14px;
    color: ${p => p.color};
`