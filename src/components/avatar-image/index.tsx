import { useState } from 'react';

import * as Icon from 'assets';
import * as Styles from './styles';
import { ImageProps } from './types';

const AvatarImage = ({ width = 100, height = 100, source }: ImageProps) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Styles.AvatarBlock width={width} height={height}>
      {source ? (
        <Styles.Image
          alt="avatar"
          src={source}
          width={width}
          height={height}
          isLoading={isLoading}
          onLoad={() => setIsLoading(false)}
          onError={() => setIsLoading(false)}
        />
      ) : (
        <Icon.Avatar width={width} height={height} />
      )}

      {isLoading && source && <Icon.Loader width={width} height={height} />}

      <Styles.Circle>
        <Icon.Settings />
      </Styles.Circle>
    </Styles.AvatarBlock>
  );
};

export { AvatarImage };
