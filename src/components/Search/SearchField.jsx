import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Select, List, Avatar, Skeleton } from "antd";
import useInputHandler from "../../hooks/useInputHandler";
import searchAction, {
  addItemAction,
  deleteItemAction,
  updateStoreAction
} from "../../redux/Search/actions";
import useLocalStorage from "./effects";

const debounce = (func, wait, immediate) => {
  let timeout;
  // eslint-disable-next-line
  return function() {
    const context = this;
    // eslint-disable-next-line
    const args = arguments;
    // eslint-disable-next-line
    const later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

const getSearchResult = debounce(
  (dispatch, v) => dispatch(searchAction(v)),
  300
);

const SearchFields = () => {
  const dispatch = useDispatch();
  const loading = useSelector(store => store.Search.pending);
  const documents = useSelector(store => store.Search.documents);
  const savedDocuments = useSelector(store => store.Search.savedDocuments);

  const { onChange } = useInputHandler();
  useLocalStorage(savedDocuments, dispatch, updateStoreAction);

  const onSearch = v => {
    onChange(v);
    if (v.length > 2) {
      getSearchResult(dispatch, v);
    }
  };
  const handleAddItem = id => dispatch(addItemAction(id));
  const handleDelete = id => dispatch(deleteItemAction(id));

  return (
    <Row type="flex" justify="space-around" style={{ marginTop: 100 }}>
      <Col span={12}>
        <Select
          loading={loading}
          showSearch
          autoClearSearchValue
          defaultActiveFirstOption={false}
          showArrow={false}
          filterOption={false}
          value=""
          placeholder="Inserted are removed"
          onSearch={onSearch}
          onChange={handleAddItem}
          style={{ width: "100%" }}
        >
          {documents &&
            documents.map(item => (
              <Select.Option key={item.id} value={item.id}>
                <Col span={10}>
                  <List.Item>
                    <List.Item.Meta
                      avatar={
                        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                      }
                      title={item.title}
                      description={item.description}
                    />
                  </List.Item>
                </Col>
              </Select.Option>
            ))}
        </Select>
      </Col>
      <Col span={8}>
        <List
          className="demo-loadmore-list"
          loading={loading}
          itemLayout="horizontal"
          dataSource={savedDocuments}
          renderItem={item => (
            <List.Item
              actions={[
                // eslint-disable-next-line
                <a
                  key="list-loadmore-more"
                  href="#"
                  onClick={() => handleDelete(item.id)}
                >
                  delete
                </a>
              ]}
            >
              <Skeleton avatar title={false} loading={loading} active>
                <List.Item.Meta
                  avatar={
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                  }
                  title={<a href="https://ant.design">{item.title}</a>}
                  description={item.description}
                />
              </Skeleton>
            </List.Item>
          )}
        />
      </Col>
    </Row>
  );
};

export default React.memo(SearchFields);
