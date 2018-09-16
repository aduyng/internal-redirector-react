import { shape, string, bool } from 'prop-types';

export default shape({
  id: string.isRequired,
  search: string.isRequired,
  replace: string.isRequired,
  isActive: bool.isRequired
});
