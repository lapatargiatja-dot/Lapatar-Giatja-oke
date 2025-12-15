export enum TransactionType {
  INCOME = 'INCOME',
  EXPENSE = 'EXPENSE'
}

export interface Transaction {
  id: string;
  date: string; // ISO String
  amount: number;
  category: string;
  description: string;
  type: TransactionType;
}

export interface FinancialSummary {
  totalIncome: number;
  totalExpense: number;
  balance: number;
}

export type ViewState = 'DASHBOARD' | 'TRANSACTIONS' | 'ANALYSIS';

export const CATEGORIES = {
  INCOME: ['Gaji', 'Bonus', 'Investasi', 'Hadiah', 'Lainnya'],
  EXPENSE: ['Makanan', 'Transportasi', 'Tempat Tinggal', 'Hiburan', 'Kesehatan', 'Belanja', 'Tagihan', 'Lainnya']
};