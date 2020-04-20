import React,{useEffect, useState} from 'react';
import 'antd/dist/antd.css';
import { Table } from 'antd';
import {connect} from 'react-redux';
// import {getThreatenedCounts,getThreatenedCountsByHabitat,getThreatenedCountsByCountry} from '../actions/index'

const TableSetup = ({ tableData }) => {

    const columns = [
        {
          title: 'Habitats',
          dataIndex: 'habitat',
          key: 'CountryName',
        },
        {
          title: 'Description',
          dataIndex: 'description',
          key:'class',
        },
        {
          title: 'Number of species',
          dataIndex: 'count',
          key:'totalThreatened',
        },
      ];
      
      return(
        <div style={{width:'100%'}}>
          <Table
            columns={columns}
            dataSource={tableData}
            bordered
            pagination={false}
            title={() => 'Top hotspot habitats'}
          />
        </div>
      )    
};

const mapStateToProps = state => {
  return {
    tableData: state.tableReducer.tableData
  }
};

export default connect(mapStateToProps,{})(TableSetup);

