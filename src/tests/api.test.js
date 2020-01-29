import axios from 'axios';
import adapter from 'axios/lib/adapters/http';

test('should get data from api', async () => {

  return axios.get(`http://localhost:3030/api/reviews/1`, {adapter})
  .then(response => {
    resolve(response);
  })

      expect(data.length).toBeGreaterThan(0);
      expect(data[2]).toHaveProperty(title);
})
