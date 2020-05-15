import { roomTypes, userCommonUtils } from '../../utils/client';
import { DiscussionRoomType } from '../lib/discussionRoomType';
import { settings } from '../../settings/client';
import { Rooms, Subscriptions, Users } from '../../models/client';
import { AuthorizationUtils } from '../../authorization/client';


roomTypes.add(new DiscussionRoomType(settings, Users, Rooms, Subscriptions, AuthorizationUtils, userCommonUtils));
