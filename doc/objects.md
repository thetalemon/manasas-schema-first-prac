# Objects

### About objects

[Objects](https://graphql.github.io/graphql-spec/June2018/#sec-Objects) in GraphQL represent the resources you can access. An object can contain a list of fields, which are specifically typed.

### Transaction

<p>取引レコード</p>  

#### Fields

<table>
  <tr>
    <th>Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><strong>id</strong> (<a href="scalars.md#id">ID!</a>)</td> 
    <td><p>取引ID</p></td>
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