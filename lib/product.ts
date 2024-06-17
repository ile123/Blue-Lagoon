export const getAllProducts = async () => {
  try {
    const response = await fetch("http://localhost:3001/products");
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    const allProducts = await response.json();
    return allProducts;
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return [];
  }
};

export const getAllProductsByCollection = async (collection: string) => {
  try {
    const response = await fetch(
      `http://localhost:3001/products?collection=${collection}`
    );
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    const allProducts = await response.json();
    return allProducts;
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return [];
  }
};

export const getProductById = async (id: string) => {
  try {
    const response = await fetch(`http://localhost:3001/products?id=${id}`);
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    const allProducts = await response.json();
    return allProducts[0];
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return {};
  }
};
