class MockService {
  getAllElements = (): Array<any> => {
    const size: number = localStorage.length;
    const elements: Array<any> = new Array<any>();
    for (let i = 0; i < size; i++) {
      const elementKey: string | null = localStorage.key(i);
      if (elementKey !== null) {
        elements.push(localStorage.getItem(elementKey));
      }
    }
    return elements;
  };

  putElement = (key: string, value: any): void => {
    localStorage.setItem(key, value);
  };
}

export default MockService;
