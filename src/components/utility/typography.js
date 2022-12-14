import styled from 'styled-components/native';
import { Text } from 'react-native';
import { Theme } from '../../theme';

export const OverView = styled(Text)`
  font-size: 14;
  font-weight: 400;
  line-height: 18;
  color: ${Theme.color.primary};
  align-items: center;
`;

export const Rating = styled(Text)`
  font-size: 14;
  font-weight: 500;
  color: ${Theme.color.active};
  align-items: center;
  text-align: center;
  margin-top: 10;
`;

export const Description = styled(Text)`
  font-size: 13;
  color: ${Theme.color.primary};
  line-height: 18;
  font-weight: 400;
`;
export const HeaderTitle = styled(Text)`
  font-size: 18;
  line-height: 20;
  font-weight: 600;
  color: ${Theme.color.primary};
  margin-horizontal: 120;
`;
export const MovieTitle = styled(Text)`
  font-size: 16;
  line-height: 24;
  font-weight: 600;
  color: ${Theme.color.primary};
  margin-top: 4;
  margin-bottom: 10;
`;

export const Icons = styled(Text)`
  color: ${Theme.color.primary};
  margin-bottom: 8;
  font-weight: 600;
  font-size: 14;
`;
export const Describtion = styled(Text)`
  font-size: 18;
  font-weight: 600;
  color: ${Theme.color.primary};
`;
export const SubDescribtion = styled(Text)`
  font-size: 14;
  font-weight: 500;
  color: ${Theme.color.secandary};
  text-align: center;
  margin-top: 10px;
`;

export const Reviewer = styled(Text)`
  font-size: 13;
  color: ${Theme.color.primary};
  line-height: 18;
  font-weight: 700;
`;

export const Question = styled(Text)`
  font-size: 18;
  color: ${Theme.color.primary};
  line-height: 27;
  font-weight: 700;
  margin-horizontal: 20;
  margin-vertical: 12;
`;
