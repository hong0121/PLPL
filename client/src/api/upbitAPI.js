import axios from 'axios';

// Upbit API의 기본 URL
const API_BASE_URL = 'https://api.upbit.com/v1';

// Upbit API와 통신하는 함수들
const upbitAPI = {
  // 거래소에서 지원하는 모든 거래 쌍 가져오기
  getAllMarkets: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/market/all`);
      return response.data;
    } catch (error) {
      console.error('Error fetching markets:', error);
      throw error;
    }
  },

  // 특정 거래 쌍에 대한 현재가 정보 가져오기
  getTicker: async (market) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/ticker?markets=${market}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching ticker for ${market}:`, error);
      throw error;
    }
  },

  // 특정 거래 쌍의 호가 정보 가져오기
  getOrderBook: async (market) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/orderbook?markets=${market}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching orderbook for ${market}:`, error);
      throw error;
    }
  },

  // 특정 거래 쌍의 최근 체결 내역 가져오기
  getRecentTrades: async (market) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/trades/ticks?market=${market}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching recent trades for ${market}:`, error);
      throw error;
    }
  },

  // 기타 필요한 API 함수들을 여기에 추가할 수 있습니다.
};

export default upbitAPI;
