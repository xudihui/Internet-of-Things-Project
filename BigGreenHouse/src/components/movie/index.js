import React from 'react'
import movie from './mov.ogg'
import movieMp4 from './mov.mp4'
import './index.less'
import { Flex } from 'antd-mobile'

const Movie = props => {
  const width = window.innerWidth / 2 - 8
  const videoProps = {
    autoplay: 'autoplay',
    muted: true,
    loop: true,
    'x5-video-player-type': 'h5',
    playsInline: true,
    'webkit-playsinline': true,
    'x5-playsinline': true,
    controls: false,
    style: {
      width
    },
    className: 'movie-item'
  }
  return (
    <div className='movie-bg'>
      <Flex justify='center'>
        <Flex.Item>
          <video {...videoProps}>
            <source src={movieMp4} type='video/mp4' />
            <source src={movie} type='video/ogg' />
            Your browser does not support HTML5 video.
          </video>
        </Flex.Item>
        <Flex.Item>
          <video {...videoProps}>
            <source src={movieMp4} type='video/mp4' />
            <source src={movie} type='video/ogg' />
            Your browser does not support HTML5 video.
          </video>
        </Flex.Item>
      </Flex>
      <Flex justify='center' style={{ marginTop: -5 }}>
        <Flex.Item>
          <video {...videoProps}>
            <source src={movieMp4} type='video/mp4' />
            <source src={movie} type='video/ogg' />
            Your browser does not support HTML5 video.
          </video>
        </Flex.Item>
        <Flex.Item>
          <video {...videoProps}>
            <source src={movieMp4} type='video/mp4' />
            <source src={movie} type='video/ogg' />
            Your browser does not support HTML5 video.
          </video>
        </Flex.Item>
      </Flex>
    </div>
  )
}

export default Movie
