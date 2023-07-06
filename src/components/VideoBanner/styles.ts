import Image from 'next/image'
import { styled } from 'styled-components'

export const Container = styled.div`
  .container-image {
    position: relative;
    box-shadow: rgba(17, 12, 46, 0.15) 0px 0px 20px 0px;
    border-radius: 8px 8px 0px 0px;
    overflow: hidden;
  }

  .thumb {
    height: 100%;
  }
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    transition: opacity 0.4s ease-in;
    background: #2c83fb;
    cursor: pointer;
  }

  .content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    text-align: center;
  }

  .title {
    padding: 1rem;
    font-weight: 700;
    color: #1f2937;
    background: white;
    box-shadow: rgba(17, 12, 46, 0.15) 0px 12px 12px 0px;
    border-radius: 0px 0px 8px 8px;
    cursor: pointer;
  }

  :hover .overlay {
    opacity: 0.7;
  }
`

export const ImageStyled = styled(Image)`
  height: 100%;
  width: 100%;
`

export const OverlayStyled = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  transition: opacity 0.4s ease-in;
  background: #2c83fb;
  cursor: pointer;
  border-radius: 8px;

  :hover {
    opacity: 0.8;
  }
`

export const ContentStyled = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center;
`
