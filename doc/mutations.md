# Mutations

### About mutations



### addTransaction

<p>取引の追加</p>

#### Input fields

- input ([TransactionInput](input_objects.md#transactioninput))
 

#### Returns

| Name | Description |
|------|-------------|
| id ([ID!](scalars.md#id)) | <p>取引ID</p> |
| in ([Int](scalars.md#int)) | <p>入金額</p> |
| memo ([String!](scalars.md#string)) | <p>取引に関するメモ</p> |
| out ([Int](scalars.md#int)) | <p>出金額</p> |
| transactionDate ([Date!](scalars.md#date)) | <p>取引日付</p> |

---

### updateTransaction

<p>取引の更新</p>

#### Input fields

- id ([ID!](scalars.md#id))

- input ([TransactionInput](input_objects.md#transactioninput))
 

#### Returns

| Name | Description |
|------|-------------|
| id ([ID!](scalars.md#id)) | <p>取引ID</p> |
| in ([Int](scalars.md#int)) | <p>入金額</p> |
| memo ([String!](scalars.md#string)) | <p>取引に関するメモ</p> |
| out ([Int](scalars.md#int)) | <p>出金額</p> |
| transactionDate ([Date!](scalars.md#date)) | <p>取引日付</p> |

---