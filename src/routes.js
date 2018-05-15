import React from 'react';
import { Route, Switch} from 'react-router-dom';
import HomeContainer from './components/views/HomePage';
import PostPreviewContainer from './components/views/PostPreviewPage';
import AuthorContainer from './components/views/AuthorPage';
import CreatePostContainer from './components/views/CreatePostPage';

export default (
    <Switch>
        <Route exact path='/' component={HomeContainer} />
        <Route path='/post' component={PostPreviewContainer} />
        <Route path='/new-post' component={CreatePostContainer} />
        <Route path='/author' component={AuthorContainer} />
    </Switch>
)