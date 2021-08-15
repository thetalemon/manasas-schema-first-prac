import { gql } from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
};


export type Mutation = {
  __typename?: 'Mutation';
  /** 取引の追加 */
  addTransaction: Transaction;
  /** 取引の更新 */
  updateTransaction?: Maybe<Transaction>;
};


export type MutationAddTransactionArgs = {
  input: TransactionInput;
};


export type MutationUpdateTransactionArgs = {
  id: Scalars['ID'];
  input: TransactionInput;
};

export type Query = {
  __typename?: 'Query';
  /** 取引データの取得 */
  getTransaction?: Maybe<Transaction>;
  /** 取引一覧の取得 */
  getTransactions?: Maybe<Array<Transaction>>;
};


export type QueryGetTransactionArgs = {
  id: Scalars['ID'];
};

/** 取引レコード */
export type Transaction = {
  __typename?: 'Transaction';
  /** 取引ID */
  id: Scalars['ID'];
  /** 取引に関するメモ */
  memo: Scalars['String'];
  /** 入金額 */
  in?: Maybe<Scalars['Int']>;
  /** 出金額 */
  out?: Maybe<Scalars['Int']>;
  /** 取引日付 */
  transactionDate: Scalars['Date'];
};

/** 取引のInput */
export type TransactionInput = {
  /** 取引に関するメモ */
  memo: Scalars['String'];
  /** 入金額 */
  in?: Maybe<Scalars['Int']>;
  /** 出金額 */
  out?: Maybe<Scalars['Int']>;
  /** 取引日付 */
  transactionDate: Scalars['Date'];
};
