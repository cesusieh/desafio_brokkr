export interface Product {
  id: string;
  nome: string;
  descricao: string;
  preco: number;
  url_imagem: string;
  quantidade_em_stock: number;
  createdAt: string; 
  updatedAt: string;
}

export interface ApiResponse {
    totalItems: number;
    totalPages: number;
    products: Product[];
}