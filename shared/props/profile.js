import { shape, string, bool } from 'prop-types';

export default shape({
  id: string.isRequired,
  name: string.isRequired,
  isActive: bool.isRequired,
});
