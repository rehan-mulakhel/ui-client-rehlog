import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './ArticleCreate.scss';
import { useCreateArticleMutation } from '../../services/article';
import { Editor } from '../editor/Editor';

export const ArticleCreate = () => {
  const [content, setContent] = useState(null);
  const [createArticle, { isLoading }] = useCreateArticleMutation();
  const navigate = useNavigate();
  const initValue = ''
    .concat('---\n')
    .concat('Titre: \n')
    .concat('Description: \n')
    .concat('---\n')
    .concat('Il était une fois');

  const onSave = async () => {
    if (content == null) {
      return;
    }
    const form = new URLSearchParams({ content: content });
    const response = await createArticle(form);
    const articleId = response.data.message;
    navigate(`/${articleId}`);
  };

  return (
    <div id="article-create">
      <Editor initValue={initValue} onChange={setContent} />
      <center>
        <Button variant="primary" onClick={onSave}>
          Save
        </Button>
        {isLoading ? 'Loading' : 'Not Loading'}
      </center>
    </div>
  );
};
