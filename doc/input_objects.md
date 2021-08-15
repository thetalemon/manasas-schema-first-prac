# Input objects

### About input objects

[Input objects](https://graphql.github.io/graphql-spec/June2018/#sec-Input-Objects) can be described as "composable objects" because they include a set of input fields that define the object.

### TransactionInput

<p>取引のInput</p>


#### Input fields

<table>
  <tr>
    <th>Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><strong>in</strong> (<a href="scalars.md#int">Int</a>)</td>
    <td><p>入金額</p></td>
  </tr>
  <tr>
    <td><strong>memo</strong> (<a href="scalars.md#string">String!</a>)</td>
    <td><p>取引に関するメモ</p></td>
  </tr>
  <tr>
    <td><strong>out</strong> (<a href="scalars.md#int">Int</a>)</td>
    <td><p>出金額</p></td>
  </tr>
  <tr>
    <td><strong>transactionDate</strong> (<a href="scalars.md#date">Date!</a>)</td>
    <td><p>取引日付</p></td>
  </tr>
</table>

---