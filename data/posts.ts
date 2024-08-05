import {IPost} from "@/types/post.interface";
import {IPostComment} from "@/types/post-comment.interface";

const posts: IPost[] = [
    {
        id: "1",
        title: "Introduction to Neural Networks",
        body: "This post covers the basics of neural networks, including their structure, function, and applications.",
        author: "Alice Johnson",
        date: "2024-08-01",
        comments: [
            {
                id: "1-1",
                text: "Great introduction!",
                username: "JohnDoe"
            }
        ]
    },
    {
        id: "2",
        title: "Understanding Backpropagation",
        body: "An in-depth look at the backpropagation algorithm used in training neural networks.",
        author: "Bob Smith",
        date: "2024-08-02",
        comments: [
            {
                id: "2-1",
                text: "Very informative post.",
                username: "JaneDoe"
            }
        ]
    },
    {
        id: "3",
        title: "Supervised vs Unsupervised Learning",
        body: "Exploring the differences between supervised and unsupervised learning techniques.",
        author: "Carol White",
        date: "2024-08-03",
        comments: [
            {
                id: "3-1",
                text: "Clear and concise.",
                username: "MikeBrown"
            }
        ]
    },
    {
        id: "4",
        title: "Introduction to Reinforcement Learning",
        body: "Basics of reinforcement learning, including key concepts and algorithms.",
        author: "David Black",
        date: "2024-08-04",
        comments: [
            {
                id: "4-1",
                text: "Well explained!",
                username: "SarahGreen"
            }
        ]
    },
    {
        id: "5",
        title: "Support Vector Machines Explained",
        body: "Detailed explanation of Support Vector Machines (SVMs) and their applications.",
        author: "Emma Brown",
        date: "2024-08-05",
        comments: [
            {
                id: "5-1",
                text: "SVMs are fascinating!",
                username: "TomWhite"
            }
        ]
    },
    {
        id: "6",
        title: "Introduction to Clustering Algorithms",
        body: "Overview of clustering algorithms, including K-means and hierarchical clustering.",
        author: "Frank Green",
        date: "2024-08-06",
        comments: [
            {
                id: "6-1",
                text: "Very useful post.",
                username: "NancyBlue"
            }
        ]
    },
    {
        id: "7",
        title: "Understanding Gradient Descent",
        body: "In-depth look at gradient descent and its variants used in machine learning.",
        author: "Grace Gray",
        date: "2024-08-07",
        comments: [
            {
                id: "7-1",
                text: "Helpful explanations.",
                username: "PaulRed"
            }
        ]
    },
    {
        id: "8",
        title: "Natural Language Processing Basics",
        body: "Introduction to natural language processing (NLP) and its applications.",
        author: "Hannah Blue",
        date: "2024-08-08",
        comments: [
            {
                id: "8-1",
                text: "Great overview of NLP.",
                username: "LauraYellow"
            }
        ]
    },
    {
        id: "9",
        title: "Machine Learning Model Evaluation Metrics",
        body: "Discussion on various metrics used to evaluate machine learning models.",
        author: "Ian Purple",
        date: "2024-08-09",
        comments: [
            {
                id: "9-1",
                text: "Very informative.",
                username: "LiamBlack"
            }
        ]
    },
    {
        id: "10",
        title: "Introduction to Decision Trees",
        body: "Basics of decision trees, including how they are built and used.",
        author: "Jack White",
        date: "2024-08-10",
        comments: [
            {
                id: "10-1",
                text: "Clear and concise explanation.",
                username: "OliviaOrange"
            }
        ]
    },
    {
        id: "11",
        title: "Ensemble Learning Methods",
        body: "Overview of ensemble learning techniques like bagging and boosting.",
        author: "Karen Black",
        date: "2024-08-11",
        comments: [
            {
                id: "11-1",
                text: "Great post on ensemble methods!",
                username: "PeteGray"
            }
        ]
    },
    {
        id: "12",
        title: "Introduction to Deep Learning",
        body: "Basics of deep learning and its applications in various fields.",
        author: "Leo Green",
        date: "2024-08-12",
        comments: [
            {
                id: "12-1",
                text: "Deep learning is fascinating!",
                username: "QuinnWhite"
            }
        ]
    },
    {
        id: "13",
        title: "Understanding Convolutional Neural Networks",
        body: "Detailed explanation of convolutional neural networks (CNNs) and their applications.",
        author: "Mia Gray",
        date: "2024-08-13",
        comments: [
            {
                id: "13-1",
                text: "Great explanation of CNNs.",
                username: "RachelBlue"
            }
        ]
    },
    {
        id: "14",
        title: "Introduction to Recurrent Neural Networks",
        body: "Basics of recurrent neural networks (RNNs) and their applications.",
        author: "Nick Blue",
        date: "2024-08-14",
        comments: [
            {
                id: "14-1",
                text: "Very informative post on RNNs.",
                username: "SamBrown"
            }
        ]
    },
    {
        id: "15",
        title: "Understanding Transfer Learning",
        body: "Discussion on transfer learning and its benefits in machine learning.",
        author: "Olivia Orange",
        date: "2024-08-15",
        comments: [
            {
                id: "15-1",
                text: "Transfer learning is a game-changer!",
                username: "TinaWhite"
            }
        ]
    },
    {
        id: "16",
        title: "Introduction to Generative Adversarial Networks",
        body: "Basics of generative adversarial networks (GANs) and their applications.",
        author: "Paul Red",
        date: "2024-08-16",
        comments: [
            {
                id: "16-1",
                text: "Great introduction to GANs.",
                username: "UmaBlack"
            }
        ]
    },
    {
        id: "17",
        title: "Understanding Autoencoders",
        body: "In-depth look at autoencoders and their applications in machine learning.",
        author: "Quinn White",
        date: "2024-08-17",
        comments: [
            {
                id: "17-1",
                text: "Very informative post on autoencoders.",
                username: "VeraGreen"
            }
        ]
    },
    {
        id: "18",
        title: "Introduction to Machine Learning Pipelines",
        body: "Basics of machine learning pipelines and their importance in model deployment.",
        author: "Rachel Blue",
        date: "2024-08-18",
        comments: [
            {
                id: "18-1",
                text: "Great overview of ML pipelines.",
                username: "WillGray"
            }
        ]
    },
    {
        id: "19",
        title: "Understanding Hyperparameter Tuning",
        body: "Discussion on hyperparameter tuning and its impact on model performance.",
        author: "Sam Brown",
        date: "2024-08-19",
        comments: [
            {
                id: "19-1",
                text: "Hyperparameter tuning explained well.",
                username: "XenaWhite"
            }
        ]
    },
    {
        id: "20",
        title: "Introduction to Feature Engineering",
        body: "Basics of feature engineering and its role in machine learning.",
        author: "Tina White",
        date: "2024-08-20",
        comments: [
            {
                id: "20-1",
                text: "Feature engineering is crucial!",
                username: "YaraBlack"
            }
        ]
    },
    {
        id: "21",
        title: "Understanding Principal Component Analysis",
        body: "Detailed explanation of principal component analysis (PCA) and its applications.",
        author: "Uma Black",
        date: "2024-08-21",
        comments: [
            {
                id: "21-1",
                text: "PCA explained clearly.",
                username: "ZaneGreen"
            }
        ]
    },
    {
        id: "22",
        title: "Introduction to Natural Language Generation",
        body: "Basics of natural language generation (NLG) and its applications.",
        author: "Vera Green",
        date: "2024-08-22",
        comments: [
            {
                id: "22-1",
                text: "Great overview of NLG.",
                username: "AlanGray"
            }
        ]
    },
    {
        id: "23",
        title: "Understanding Model Overfitting",
        body: "Discussion on model overfitting, its causes, and how to prevent it.",
        author: "Will Gray",
        date: "2024-08-23",
        comments: [
            {
                id: "23-1",
                text: "Overfitting explained well.",
                username: "BettyWhite"
            }
        ]
    },
    {
        id: "24",
        title: "Introduction to Model Underfitting",
        body: "Basics of model underfitting, its causes, and how to address it.",
        author: "Xena White",
        date: "2024-08-24",
        comments: [
            {
                id: "24-1",
                text: "Underfitting explained clearly.",
                username: "CodyBlack"
            }
        ]
    },
    {
        id: "25",
        title: "Understanding Cross-Validation",
        body: "In-depth look at cross-validation techniques and their importance in model evaluation.",
        author: "Yara Black",
        date: "2024-08-25",
        comments: [
            {
                id: "25-1",
                text: "Cross-validation is crucial!",
                username: "DianaGreen"
            }
        ]
    },
    {
        id: "26",
        title: "Introduction to Bias-Variance Tradeoff",
        body: "Basics of the bias-variance tradeoff and its impact on model performance.",
        author: "Zane Green",
        date: "2024-08-26",
        comments: [
            {
                id: "26-1",
                text: "Great explanation of bias-variance tradeoff.",
                username: "EvanGray"
            }
        ]
    },
    {
        id: "27",
        title: "Understanding Data Augmentation",
        body: "Discussion on data augmentation techniques and their importance in training robust models.",
        author: "Alan Gray",
        date: "2024-08-27",
        comments: [
            {
                id: "27-1",
                text: "Data augmentation is very useful.",
                username: "FionaWhite"
            }
        ]
    },
    {
        id: "28",
        title: "Introduction to Dimensionality Reduction",
        body: "Basics of dimensionality reduction techniques like PCA and t-SNE.",
        author: "Betty White",
        date: "2024-08-28",
        comments: [
            {
                id: "28-1",
                text: "Dimensionality reduction explained well.",
                username: "GeorgeBlack"
            }
        ]
    },
    {
        id: "29",
        title: "Understanding Time Series Analysis",
        body: "In-depth look at time series analysis and its applications in machine learning.",
        author: "Cody Black",
        date: "2024-08-29",
        comments: [
            {
                id: "29-1",
                text: "Time series analysis is fascinating.",
                username: "HannahGreen"
            }
        ]
    },
    {
        id: "30",
        title: "Introduction to Anomaly Detection",
        body: "Basics of anomaly detection techniques and their applications.",
        author: "Diana Green",
        date: "2024-08-30",
        comments: [
            {
                id: "30-1",
                text: "Great overview of anomaly detection.",
                username: "IanGray"
            }
        ]
    },
    {
        id: "31",
        title: "Understanding Model Interpretability",
        body: "Discussion on the importance of model interpretability and techniques to achieve it.",
        author: "Evan Gray",
        date: "2024-08-31",
        comments: [
            {
                id: "31-1",
                text: "Model interpretability is crucial.",
                username: "JennyWhite"
            }
        ]
    },
    {
        id: "32",
        title: "Introduction to Active Learning",
        body: "Basics of active learning and its applications in improving model performance.",
        author: "Fiona White",
        date: "2024-09-01",
        comments: [
            {
                id: "32-1",
                text: "Active learning explained well.",
                username: "KyleBlack"
            }
        ]
    },
    {
        id: "33",
        title: "Understanding Semi-Supervised Learning",
        body: "Discussion on semi-supervised learning techniques and their benefits.",
        author: "George Black",
        date: "2024-09-02",
        comments: [
            {
                id: "33-1",
                text: "Semi-supervised learning is very interesting.",
                username: "LauraGreen"
            }
        ]
    },
    {
        id: "34",
        title: "Introduction to Multi-Task Learning",
        body: "Basics of multi-task learning and its applications in machine learning.",
        author: "Hannah Green",
        date: "2024-09-03",
        comments: [
            {
                id: "34-1",
                text: "Great explanation of multi-task learning.",
                username: "MikeGray"
            }
        ]
    },
    {
        id: "35",
        title: "Understanding Few-Shot Learning",
        body: "In-depth look at few-shot learning techniques and their applications.",
        author: "Ian Gray",
        date: "2024-09-04",
        comments: [
            {
                id: "35-1",
                text: "Few-shot learning is fascinating.",
                username: "NinaWhite"
            }
        ]
    },
    {
        id: "36",
        title: "Introduction to Meta-Learning",
        body: "Basics of meta-learning and its impact on improving model performance.",
        author: "Jenny White",
        date: "2024-09-05",
        comments: [
            {
                id: "36-1",
                text: "Meta-learning explained well.",
                username: "OwenBlack"
            }
        ]
    },
    {
        id: "37",
        title: "Understanding Zero-Shot Learning",
        body: "Discussion on zero-shot learning techniques and their applications.",
        author: "Kyle Black",
        date: "2024-09-06",
        comments: [
            {
                id: "37-1",
                text: "Zero-shot learning is very interesting.",
                username: "PaulaGreen"
            }
        ]
    },
    {
        id: "38",
        title: "Introduction to Few-Shot and Zero-Shot Learning",
        body: "Basics of few-shot and zero-shot learning and their importance in AI.",
        author: "Laura Green",
        date: "2024-09-07",
        comments: [
            {
                id: "38-1",
                text: "Great overview of few-shot and zero-shot learning.",
                username: "QuinnGray"
            }
        ]
    },
    {
        id: "39",
        title: "Understanding Self-Supervised Learning",
        body: "In-depth look at self-supervised learning techniques and their applications.",
        author: "Mike Gray",
        date: "2024-09-08",
        comments: [
            {
                id: "39-1",
                text: "Self-supervised learning explained well.",
                username: "RitaWhite"
            }
        ]
    },
    {
        id: "40",
        title: "Introduction to Explainable AI",
        body: "Basics of explainable AI and its importance in building trustworthy models.",
        author: "Nina White",
        date: "2024-09-09",
        comments: [
            {
                id: "40-1",
                text: "Explainable AI is crucial!",
                username: "SteveBlack"
            }
        ]
    },
    {
        id: "41",
        title: "Understanding Federated Learning",
        body: "Discussion on federated learning techniques and their applications.",
        author: "Owen Black",
        date: "2024-09-10",
        comments: [
            {
                id: "41-1",
                text: "Federated learning is very interesting.",
                username: "TinaGreen"
            }
        ]
    },
    {
        id: "42",
        title: "Introduction to Continual Learning",
        body: "Basics of continual learning and its impact on model performance.",
        author: "Paula Green",
        date: "2024-09-11",
        comments: [
            {
                id: "42-1",
                text: "Continual learning explained well.",
                username: "UmaGray"
            }
        ]
    },
    {
        id: "43",
        title: "Understanding Contrastive Learning",
        body: "In-depth look at contrastive learning techniques and their applications.",
        author: "Quinn Gray",
        date: "2024-09-12",
        comments: [
            {
                id: "43-1",
                text: "Contrastive learning is fascinating.",
                username: "VeraWhite"
            }
        ]
    },
    {
        id: "44",
        title: "Introduction to Causal Inference",
        body: "Basics of causal inference and its applications in machine learning.",
        author: "Rita White",
        date: "2024-09-13",
        comments: [
            {
                id: "44-1",
                text: "Causal inference explained well.",
                username: "WillBlack"
            }
        ]
    },
    {
        id: "45",
        title: "Understanding Graph Neural Networks",
        body: "Discussion on graph neural networks (GNNs) and their applications.",
        author: "Steve Black",
        date: "2024-09-14",
        comments: [
            {
                id: "45-1",
                text: "Graph neural networks are very interesting.",
                username: "XenaGreen"
            }
        ]
    },
    {
        id: "46",
        title: "Introduction to Attention Mechanisms",
        body: "Basics of attention mechanisms and their importance in neural networks.",
        author: "Tina Green",
        date: "2024-09-15",
        comments: [
            {
                id: "46-1",
                text: "Great overview of attention mechanisms.",
                username: "YaraGray"
            }
        ]
    },
    {
        id: "47",
        title: "Understanding Transformers in NLP",
        body: "In-depth look at transformers and their impact on natural language processing.",
        author: "Uma Gray",
        date: "2024-09-16",
        comments: [
            {
                id: "47-1",
                text: "Transformers are fascinating.",
                username: "ZaneWhite"
            }
        ]
    },
    {
        id: "48",
        title: "Introduction to Self-Attention Mechanisms",
        body: "Basics of self-attention mechanisms and their applications in neural networks.",
        author: "Vera White",
        date: "2024-09-17",
        comments: [
            {
                id: "48-1",
                text: "Self-attention mechanisms explained well.",
                username: "AlanBlack"
            }
        ]
    },
    {
        id: "49",
        title: "Understanding Multi-Head Attention",
        body: "Discussion on multi-head attention and its role in transformer models.",
        author: "Will Black",
        date: "2024-09-18",
        comments: [
            {
                id: "49-1",
                text: "Multi-head attention is very interesting.",
                username: "BettyGreen"
            }
        ]
    },
    {
        id: "50",
        title: "Introduction to Sequence-to-Sequence Models",
        body: "Basics of sequence-to-sequence models and their applications in NLP.",
        author: "Xena Green",
        date: "2024-09-19",
        comments: [
            {
                id: "50-1",
                text: "Great overview of sequence-to-sequence models.",
                username: "CodyGray"
            }
        ]
    }
];


