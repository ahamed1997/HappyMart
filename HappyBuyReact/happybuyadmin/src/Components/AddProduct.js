import React, { Component } from 'react'
import { Row, Col,Button ,notification} from 'antd';
import { Label, Table } from 'reactstrap';
import '../CSS/AddProduct.css';
import AuthService from './AuthService';

let tempSpecification =[];
let specarray =[];
var styles = {
    maxWidth:300,
    minWidth:100,
    maxHeight:1000,
    overflow: "hidden",
    textOverflow: 'ellipsis',
    whitespace: 'nowrap',
   };
class AddProduct extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            ProductName:"",
            ProductSpecification:null,
            ProductDescription:"",
            ProductOptions:"",
            ProductSubCategory:"",
            ProductBrand:"",
            ProductPrice:"",
            ProductQuantity:"",
            ProductIsActive:null,
            ProductImageURL:"",
            SpecificationName:[],
            SpecificationValue:[],
            specificationName:"",
            specificationValue:"",
            SubCategory:[],
            ProductSubCategoryId:null,
        }
        this.handleSpecificationChange = this.handleSpecificationChange.bind(this);
    }
    componentDidMount(){
        AuthService.getSubCategories()
        .then(result=>{
            this.setState({SubCategory:result.data})
        })
        this.initialstate = this.state;
    }

    handleSubmit = e =>{
        e.preventDefault()
        if(
            (this.state.ProductSubCategoryId &&  this.state.ProductSpecification && this.state.ProductIsActive !==null)
            && 
            (this.state.ProductName && this.state.ProductDescription && this.state.ProductBrand && this.state.ProductImageURL && this.state.ProductQuantity && this.state.ProductPrice && this.state.ProductOptions !== "")
            &&
            ( this.state.SpecificationName.length >0)
        )
        {
            const product ={
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
                AuthService.addProduct(product)
                .then(result=>{
                    console.log(result.data);
                    for(let i=0; i<this.state.SpecificationName.length; i++)
                    {
                        specarray.push(
                            {SpecificationProductId:result.data,
                            SpecificationName:this.state.SpecificationName[i],
                            SpecificationValue:this.state.SpecificationValue[i],
                        }
                        )

                    }
                        AuthService.addSpecifications(specarray)
                    .then(json=>{
                        console.log(json.data);
                    })
                    window.location.reload();
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
    handleChange= (e)=> {  
        e.preventDefault() 
        this.setState({[e.target.name]:e.target.value});
    }
    handleSpecificationChange(e)
    {     
        e.preventDefault() ;
        this.setState({[e.target.name]:e.target.value});    
    }
    addSpecification()
    {
        if((this.state.specificationValue !== "") && (this.state.specificationName !== ""))
        {
            tempSpecification.push([this.state.specificationName,this.state.specificationValue]);
            this.setState(prevState => ({
                SpecificationName: [...prevState.SpecificationName, this.state.specificationName]
            }))
            this.setState(prevState => ({
                SpecificationValue: [...prevState.SpecificationValue, this.state.specificationValue]
            }))
            this.setState({specificationName:""})
            this.setState({specificationValue:""})
        }
        else{
            notification['warning']({
                message: 'Please add Specification details !',
                description:
                  '',
              });  
           
        }
        console.log(this.state.SpecificationName)
        console.log(this.state.SpecificationValue)
    }

    render() {
        var style = {
            color: 'black'
          };
         
        return (
            <div>
                <h4 className="text-center">ADD NEW PRODUCT</h4>
                <form onSubmit={this.handleSubmit} noValidate>
                <Row>
                <Col span={12}>
                <Table responsive   bordered>
                    <tbody>
                        <tr>
                            <th className="text-left"><Label> SubCategory : </Label></th>
                            <td className="text-left"> 
                            <select  className="form-control" value={this.state.ProductSubCategoryId} name="ProductSubCategoryId" onChange={this.handleChange}>
                                <option disabled selected value> -- select an category -- </option>
                                {this.state.SubCategory.map(subCategory=>
                                        <option  value={subCategory.subCategoryId}>{subCategory.subCategoryName}</option>

                                )}
                            </select>
                            </td>
                        </tr>
                        <tr>
                            <th className="text-left"><Label> Name  </Label></th>
                            <td style={style} className="text-left"> <textarea required className="form-control" value={this.state.ProductName} name="ProductName" onChange={this.handleChange} type="text-area"/></td>
                        </tr>
                        <tr>
                            <th className="text-left"><Label> Description  </Label></th>
                            <td style={style} className="text-left"> <textarea required className="form-control" value={this.state.ProductDescription} name="ProductDescription" onChange={this.handleChange} type="text-area"/></td>
                        </tr>
                        <tr>
                            <th className="text-left"><Label> Ratings  </Label></th>
                            <td style={style} className="text-left"> 
                            <select  required className="form-control" name="ProductSpecification" value={this.state.ProductSpecification} onChange={this.handleChange}>
                            <option disabled selected value> -- select an Ratings -- </option>
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
                            <td style={style} className="text-left"> <input required className="form-control" type="text" onChange={this.handleChange} value={this.state.ProductBrand} name="ProductBrand"/></td>
                        </tr>
                        <tr>
                            <th className="text-left"><Label> Price  </Label></th>
                            <td style={style} className="text-left"> <input required className="form-control" type="number" onChange={this.handleChange} value={this.state.ProductPrice} name="ProductPrice"/></td>
                        </tr>
                        
                        <tr>
                            <th className="text-left"><Label>Quantity  </Label></th>
                            <td style={style} className="text-left"> <input required className="form-control" type="number" value={this.state.ProductQuantity} onChange={this.handleChange} name="ProductQuantity"/></td>
                        </tr>
                        <tr>
                            <th className="text-left"><Label>Options </Label></th>
                            <td style={style} className="text-left"> <textarea required className="form-control" type="text" value={this.state.ProductOptions} onChange={this.handleChange} name="ProductOptions"/></td>
                        </tr>
                        <tr>
                            <th className="text-left"><Label>Active State  </Label></th>
                            <td style={style} className="text-left"> 
                            <select required className="form-control" name="ProductIsActive" value={this.state.ProductIsActive} onChange={this.handleChange}>
                            <option disabled selected value> -- select an state -- </option>
                            <option value="True">True</option>
                            <option value="False">False</option>
                            </select>
                            </td>
                        </tr>
                        <tr>
                            <th className="text-left"><Label>Image URL  </Label></th>
                            <td style={style} className="text-left"> <input required className="form-control" value={this.state.ProductImageURL} name="ProductImageURL" onChange={this.handleChange}/></td>
                        </tr>
                    </tbody>
                </Table>
                </Col>
                 <Col span={12}>
                                    <Table style={{backgroundColor:"#EEEFF0"}}   bordered className="specification" >
                                    <tbody >
                                    {tempSpecification.length > 0 ?
                                    <>
                                    {tempSpecification.map(product =>
                                            <tr >
                                                <th   >{product[0]}</th>
                                                <td  >{product[1]}</td>
                                            </tr>
                                              )} 
                                    </> 
                                    : 
                                    <>
                                    <tr>
                                        <td colspan="2" >
                                            <h5 className="text-center"> + Add Specifications </h5>
                                        </td>
                                    </tr>
                                    </>   
                                    }
                                    </tbody>
                                    </Table>
                                 
                 <Table responsive   bordered >
                    <thead>
                        <tr style={{border:null}}>
                            <th>
                                <Label>Specification Name </Label>
                            </th>
                            <th>
                                <Label>Specification Value  </Label>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr style={style}>
                        <td className="text-left" > <input  className="form-control" name="specificationName" value={this.state.specificationName} onChange={this.handleChange}/></td>
                        <td className="text-left" > <input  className="form-control" name="specificationValue" value={this.state.specificationValue} onChange={this.handleChange}/></td>
                    </tr>
                    <tr>
                        <td colspan="2" className="text-center">
                            <Button type="primary" onClick={this.addSpecification.bind(this)}>+ Add Specification</Button>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2">
                        <button   style={{"float":"center"}} className="btn btn-primary">Submit</button>
                        </td>
                    </tr>
                    </tbody>
                </Table>
                </Col>
                </Row>
                </form>
            </div>
        )
    }
}

export default AddProduct
