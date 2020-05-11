import React, { Component } from 'react'
import { Label, Table } from 'reactstrap';
import { notification} from 'antd';

import AuthService from './AuthService';

export class UpdateProduct extends Component {
    constructor(props) {
        console.log(props.subCategory)
        super(props)
    
        this.state = {
            ProductId:props.product.productId,
            ProductName:props.product.productName,
            ProductSpecification:props.product.productSpecification,
            ProductDescription:props.product.productDescription,
            ProductOptions:props.product.productOptions,
            ProductBrand:props.product.productBrand,
            ProductPrice:props.product.productPrice,
            ProductQuantity:props.product.productQuantity,
            ProductIsActive:props.product.productIsActive,
            ProductImageURL:props.product.productImageURL,
            ProductSubCategoryId:props.product.ProductSubCategoryId,
            SubCategory:[],
        }
    }
    componentDidMount()
    {
        AuthService.getSubCategories()
        .then(result=>{
            this.setState({SubCategory:result.data})
        })
    }
    shouldComponentUpdate(props, nextState) {

        if (props.product.productId !== this.props.product.productId) {
            this.update(props);
          }
        return true;  
      }
      update(props)
      {
          this.setState({ProductId:props.product.productId})
          this.setState({ProductSubCategoryId:props.product.productSubCategoryId})
          this.setState({ProductName:props.product.productName})
          this.setState({ProductSpecification:props.product.productSpecification})
          this.setState({ProductDescription:props.product.productDescription})
          this.setState({ProductOptions:props.product.productOptions})
          this.setState({ProductBrand:props.product.productBrand})
          this.setState({ProductPrice:props.product.productPrice})
          this.setState({ProductQuantity:props.product.productQuantity})
          this.setState({ProductIsActive:props.product.productIsActive})
          this.setState({ProductImageURL:props.product.productImageURL})
      }
      handleChange = (e) =>
      {
        e.preventDefault();
        console.log(e.target.value)
        this.setState({[e.target.name]:e.target.value});    
      }
      handleSubmit = e =>{
          debugger
        e.preventDefault()
        if(
            (this.state.ProductSubCategoryId &&  this.state.ProductId && this.state.ProductIsActive !=="")
            && 
            (this.state.ProductName && this.state.ProductSpecification && this.state.ProductDescription && this.state.ProductBrand && this.state.ProductImageURL && this.state.ProductQuantity && this.state.ProductPrice && this.state.ProductOptions !== "")
        )
        {
            console.log("object")
            let product ={
                ProductId:this.state.ProductId,
                ProductSubCategoryId : this.state.ProductSubCategoryId,
                ProductName: this.state.ProductName,
                ProductDescription: this.state.ProductDescription,
                ProductSpecification:this.state.ProductSpecification,
                ProductOptions:this.state.ProductOptions,
                ProductPrice:this.state.ProductPrice,
                ProductBrand:this.state.ProductBrand,
                ProductIsActive:this.state.ProductIsActive,
                ProductImageURL:this.state.ProductImageURL,
                ProductQuantity:this.state.ProductQuantity,
            }
                AuthService.updateProductDetails(product)
                .then(result=>{
                    console.log(result.data);
                })
        }
        else{
            notification['warning']({
                message: 'Please fill all the details !',
                description:
                  '',
              }); 
        }

      }
    render() {
       
        return (
            <div>
               <form onSubmit={this.handleSubmit} noValidate>
               <Table responsive   bordered>
                    <tbody>
                        <tr>
                            <th className="text-left"><Label> SubCategory  </Label></th>
                            <td className="text-left"> 
                            <select  className="form-control" selected value={this.state.ProductSubCategoryId} name="ProductSubCategoryId" onChange={this.handleChange}>
                            <option disabled selected value> -- select an category -- </option>

                                {this.state.SubCategory.map(subCategory=>
                                        <option  value={subCategory.subCategoryId}>{subCategory.subCategoryName}</option>

                                )}
                            </select>
                            </td>
                        </tr>
                        <tr>
                            <th className="text-left"><Label> Name  </Label></th>
                            <td  className="text-left"> <textarea required className="form-control" value={this.state.ProductName} name="ProductName" onChange={this.handleChange} type="text-area"/></td>
                        </tr>
                        <tr>
                            <th className="text-left"><Label> Description  </Label></th>
                            <td  className="text-left"> <textarea required className="form-control" value={this.state.ProductDescription} name="ProductDescription" onChange={this.handleChange} type="text-area"/></td>
                        </tr>
                        <tr>
                            <th className="text-left"><Label> Ratings  </Label></th>
                            <td  className="text-left"> 
                            <select  required className="form-control" name="ProductSpecification" value={this.state.ProductSpecification} onChange={this.handleChange}>
                            <option value='0'>0</option>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='5'>5</option>
                            </select>
                            </td>
                        </tr>
                        <tr>
                            <th className="text-left"><Label> Brand  </Label></th>
                            <td  className="text-left"> <input required className="form-control" type="text" onChange={this.handleChange} value={this.state.ProductBrand} name="ProductBrand"/></td>
                        </tr>
                        <tr>
                            <th className="text-left"><Label> Price  </Label></th>
                            <td  className="text-left"> <input required className="form-control" type="number" onChange={this.handleChange} value={this.state.ProductPrice} name="ProductPrice"/></td>
                        </tr>
                        
                        <tr>
                            <th className="text-left"><Label>Quantity  </Label></th>
                            <td  className="text-left"> <input required className="form-control" type="number" value={this.state.ProductQuantity} onChange={this.handleChange} name="ProductQuantity"/></td>
                        </tr>
                        <tr>
                            <th className="text-left"><Label>Options </Label></th>
                            <td  className="text-left"> <textarea required className="form-control" type="text" value={this.state.ProductOptions} onChange={this.handleChange} name="ProductOptions"/></td>
                        </tr>
                        <tr>
                            <th className="text-left"><Label>Active State  </Label></th>
                            <td  className="text-left"> 
                            <select required className="form-control" name="ProductIsActive" value={this.state.ProductIsActive} onChange={this.handleChange}>
                            <option value='true'>True</option>
                            <option value='false'>False</option>
                            </select>
                            </td>
                        </tr>
                        <tr>
                            <th className="text-left"><Label>Image URL  </Label></th>
                            <td  className="text-left"> <input required className="form-control" value={this.state.ProductImageURL} name="ProductImageURL" onChange={this.handleChange}/></td>
                        </tr>
                        <tr>
                        <td colspan="2">
                        <button   style={{"float":"center"}} className="btn btn-primary">Submit</button>
                        </td>
                    </tr>
                        </tbody>
                        </Table>
               </form>
            </div>
        )
    }
}

export default UpdateProduct
