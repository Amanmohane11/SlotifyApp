import React, { useState } from 'react';
import {
  Text,
  ScrollView,
  TextInput,
  Pressable,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';

import PrimaryButton from '../../../components/buttons/PrimaryButton';
import { styles } from './styles';

if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental?.(true);
}

const FAQS = [
  {
    question: 'How do I reschedule my appointment?',
    answer:
      'Go to Appointment Details → Reschedule and select a new date and time.',
  },
  {
    question: 'What is the cancellation policy?',
    answer:
      'You can cancel or reschedule up to 24 hours before the appointment time.',
  },
  {
    question: 'When will I receive my refund?',
    answer:
      'Refunds are processed within 5–7 business days depending on your bank.',
  },
  {
    question: 'What if the salon does not respond?',
    answer:
      'Please send us a query below and our support team will assist you.',
  },
];

const SupportScreen = () => {
  const [faqOpen, setFaqOpen] = useState(true);
  const [expandedFaqIndex, setExpandedFaqIndex] =
    useState<number | null>(null);
  const [query, setQuery] = useState('');

  const toggleFaqSection = () => {
    LayoutAnimation.easeInEaseOut();
    setFaqOpen(prev => !prev);
  };

  const toggleFaqItem = (index: number) => {
    LayoutAnimation.easeInEaseOut();
    setExpandedFaqIndex(prev => (prev === index ? null : index));
  };

  const handleSubmitQuery = () => {
    if (!query.trim()) return;

    // later: dispatch support ticket
    console.log('Support query:', query);
    setQuery('');
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
    >
      {/* HEADER */}
      <Text style={styles.title}>Support</Text>
      <Text style={styles.subtitle}>
        We’re here to help you with your bookings and queries
      </Text>

      {/* FAQ SECTION */}
      <Pressable
        style={styles.sectionHeader}
        onPress={toggleFaqSection}
      >
        <Text style={styles.sectionTitle}>FAQs</Text>
        <Text style={styles.toggleText}>
          {faqOpen ? 'Hide' : 'Show'}
        </Text>
      </Pressable>

      {faqOpen &&
        FAQS.map((faq, index) => {
          const expanded = expandedFaqIndex === index;

          return (
            <Pressable
              key={faq.question}
              style={styles.faqCard}
              onPress={() => toggleFaqItem(index)}
            >
              <Text style={styles.faqQuestion}>
                {faq.question}
              </Text>

              {expanded && (
                <Text style={styles.faqAnswer}>
                  {faq.answer}
                </Text>
              )}
            </Pressable>
          );
        })}

      {/* CONTACT SUPPORT (ALWAYS VISIBLE) */}
      <Text style={styles.sectionTitle}>Contact Support</Text>
      <Text style={styles.supportText}>
        Didn’t find your answer? Send us your query and our
        support team will get back to you.
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Describe your issue..."
        placeholderTextColor={styles.placeholder.color}
        value={query}
        onChangeText={setQuery}
        multiline
      />

      <PrimaryButton
        title="Submit Query"
        onPress={handleSubmitQuery}
        disabled={!query.trim()}
        style={styles.submitButton}
      />
    </ScrollView>
  );
};

export default SupportScreen;
