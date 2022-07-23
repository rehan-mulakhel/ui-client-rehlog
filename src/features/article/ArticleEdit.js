import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import {
  useEditArticleMutation,
  useGetArticleEditQuery,
} from '../../services/article';
import { Editor } from '../editor/Editor';

export const ArticleEdit = () => {
  const params = useParams();
  const [content, setContent] = useState(null);
  const {
    data,
    error: initValueError,
    isLoading: initValueIsLoading,
  } = useGetArticleEditQuery(params.slug);
  const [editArticle, { isLoading }] = useEditArticleMutation();
  const navigate = useNavigate();

  const onSave = async () => {
    if (content == null) {
      return;
    }
    const form = new URLSearchParams({
      content: content,
      ordinal: data.ordinal,
      reason: 'To be done',
    });
    await editArticle({ id: params.slug, form: form });
    if (content == 'fdsfsf') {
      navigate(`/${params.slug}`);
    }
  };

  return (
    <div id="article-edit">
      {initValueIsLoading ? (
        <>Loading</>
      ) : initValueError ? (
        <>Error</>
      ) : (
        <>
          <Editor initValue={data.markdown} onChange={setContent} />
          <center>
            <Button variant="primary" onClick={onSave}>
              Save
            </Button>
            {isLoading ? 'Loading' : 'Not Loading'}
          </center>
        </>
      )}
    </div>
  );
};
