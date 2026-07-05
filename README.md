# Amrutam Super App

A production-oriented React Native Ayurvedic Super App built for the Amrutam Senior React Assignment.

## Overview

This application is designed as a scalable healthcare and wellness super app containing three independent modules:

* Consultation
* Shop
* Health Records

The primary focus of this implementation is not pixel-perfect UI but production-grade engineering, architecture, scalability, offline support, and maintainability.

---

## Core Modules

### 1. Consultation Module

Features:

* Doctor listing
* Search and filtering
* Doctor details
* Available slots
* Booking flow
* Upcoming consultations
* Booking cancellation
* Slot conflict handling
* Double booking prevention
* Offline booking queue

### 2. Shop Module

Features:

* Product listing
* Infinite scrolling
* Search
* Multi-filter
* Sorting
* Product details
* Cart management
* Quantity updates
* Wishlist
* Checkout summary
* Persistent local cart

### 3. Health Records Module

Features:

* Timeline view
* Search and filters
* Tag support
* Grouping by month/year
* Attachment preview
* Record types:

  * Lab Report
  * Prescription
  * Consultation
  * Vaccination
  * Allergy

---

# Tech Stack

* React Native
* TypeScript
* Expo
* Redux Toolkit
* React Navigation
* FlashList
* AsyncStorage / Local Storage
* Axios

---

# Architecture

The project follows modular feature-based architecture.

```text
Presentation Layer
   ↓
Feature Modules
   ↓
State Management
   ↓
Services Layer
   ↓
Storage Layer
```

## Folder Structure

```text
src/
│
├── app/
│   ├── navigation/
│   └── store/
│
├── modules/
│   ├── consultation/
│   ├── shop/
│   └── records/
│
├── shared/
│   ├── components/
│   ├── hooks/
│   └── utils/
│
├── core/
│   ├── api/
│   ├── logger/
│   ├── offline/
│   └── theme/
│
└── config/
```

---

# State Management

Redux Toolkit was chosen because it provides:

* Predictable global state
* Scalable architecture
* Efficient updates
* Easier offline synchronization
* Better debugging support

Each module owns its own slice.

Example:

* consultationSlice
* shopSlice
* recordsSlice

---

# Performance Optimizations

The application is designed to support:

* 5,000 doctors
* 20,000 products
* 10,000 health records

Optimizations used:

## Virtualized Rendering

FlashList is used instead of FlatList for better large-list performance.

## Memoization

* React.memo
* useMemo
* useCallback

## Efficient State Updates

Normalized state structure used where needed:

```ts
productsById[id]
```

instead of expensive array traversal.

## Lazy Loading

Attachments and heavy screens are loaded only when needed.

---

# Offline First Strategy

The application supports offline workflows.

## Cached API Responses

Important responses are stored locally.

## Offline Cart

Cart remains accessible without internet.

## Offline Booking Queue

Consultation bookings are queued locally.

Example queued action:

```json
{
  "type": "BOOK_SLOT",
  "payload": {
    "doctorId": "d1",
    "slotId": "s2"
  }
}
```

When internet returns, queued actions are synchronized automatically.

---

# Reliability

Application gracefully handles:

* Slow network
* API timeout
* Random failures
* Empty responses
* Partial responses
* Invalid JSON
* Session expiration

Error handling uses:

* retries
* fallback UI
* error boundaries

---

# Testing Strategy

Testing covers:

## Business Logic

* Booking conflict validation
* Cart total calculations
* Record grouping

## Hooks

Custom hook behavior

## Utilities

Search and filtering helpers

## End-to-End Flow

Doctor consultation booking flow

---

# Trade-offs

Due to assignment time constraints:

* Prioritized architecture over UI polish
* Used mock/generated data instead of production backend
* Implemented scalable foundation for future expansion

---

# Future Improvements

Potential production enhancements:

* Firebase authentication
* Push notifications
* Payment gateway integration
* Biometric login
* Crash monitoring
* Analytics dashboard
* Real backend APIs

---

# Installation

Clone repository:

```bash
git clone https://github.com/nk333-kiran/amrutam-super-app.git
```

Install dependencies:

```bash
npm install
```

Run:

```bash
npm start
```

Android:

```bash
npm run android
```

Web:

```bash
npm run web
```

---

# Submission Notes

This assignment emphasizes:

* Application architecture
* Scalability
* Performance
* Offline-first design
* Developer experience

The implementation is structured accordingly to demonstrate senior-level engineering decisions and production readiness.
