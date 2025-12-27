import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

interface Review {
  userName: string;
  professionalName: string;
  rating: number;
  comment: string;
}

interface ReviewSectionProps {
  reviews: Review[];
  initialCount?: number;
}

const ReviewSection: React.FC<ReviewSectionProps> = ({
  reviews,
  initialCount = 5,
}) => {
  const [showAll, setShowAll] = useState(false);

  const visibleReviews = showAll ? reviews : reviews.slice(0, initialCount);

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Reviews ({reviews.length})</Text>

      {visibleReviews.map((review, index) => (
        <View key={index} style={styles.reviewItem}>
          <Text style={styles.userName}>{review.userName}</Text>

          <Text style={styles.professional}>
            Served by {review.professionalName}
          </Text>

          <Text style={styles.stars}>{'⭐'.repeat(review.rating)}</Text>

          <Text style={styles.comment}>{review.comment}</Text>
        </View>
      ))}

      {reviews.length > initialCount && (
        <TouchableOpacity
          onPress={() => setShowAll(!showAll)}
          style={styles.showMoreContainer}
        >
          <Text style={styles.showMoreText}>
            {showAll ? 'Show less' : 'Show more reviews'}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default ReviewSection;
